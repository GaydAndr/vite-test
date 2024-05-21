import {createSlice} from "@reduxjs/toolkit";
import {ITask} from "../../types/task.types.ts";
import {taskApi} from "../../services/task.ts";

interface IStoreTask {
  taskList: ITask[]
  currentTask: ITask | null
}

const initialState: IStoreTask = {
  taskList: [],
  currentTask: null
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTask: (state, {payload}) => {
      state.taskList = payload
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      taskApi.endpoints.getAllTask.matchFulfilled, (state, {payload}) => {
        state.taskList = payload
      }
    )
    builder.addMatcher(
      taskApi.endpoints.getOneTask.matchFulfilled, (state, {payload}) => {
        state.currentTask = payload
      }
    )
    builder.addMatcher(
      taskApi.endpoints.postTask.matchFulfilled, (state, {payload}) => {
        state.taskList.push(payload)
        // state.taskList.sort((a, b) => (
        //   new Date(b.due_date).getTime() - new Date(a.due_date).getTime()
        // ))
      }
    )
    builder.addMatcher(
      taskApi.endpoints.deleteTask.matchFulfilled, (state, {payload}) => {
        state.taskList = state.taskList.filter(
            element => element.id !== payload.id
          )
      }
    )
    builder.addMatcher(
      taskApi.endpoints.updateTask.matchFulfilled, (state, {payload}) => {
        state.taskList = state.taskList.map(obj => obj.id === payload.id ? payload : obj)
      }
    )
    // builder.addCase(deleteTask.fulfilled, (state, action) => {
    //
    // })
  }
})

export const taskAction = taskSlice.actions

export default taskSlice
