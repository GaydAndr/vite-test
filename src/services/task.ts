import {api} from "./api.ts";
import {IPostTask, ITask} from "../types/task.types.ts";

export const taskApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllTask: build.query<ITask[], string>({
      query(boardId) {
        return {
          url: `task/all/${boardId}`
        }
      },
      providesTags:['Task']
    }),
    getOneTask:build.query<ITask, any>({
      query() {
        return {
          url: `task`
        }
      },
    }),
    postTask:build.mutation<ITask, IPostTask>({
      query(body) {
        return {
          url: `task`,
          method: 'POST',
          body
        }
      },
      invalidatesTags:['Task']
    }),
    updateTask:build.mutation<ITask, any>({
      query({id, body}) {
        return {
          url: `task/${id}`,
          method: 'PATCH',
          body
        }
      },
      invalidatesTags:['Task']
    }),
    deleteTask:build.mutation<{ id: string }, string>({
      query(taskId) {
        return {
          url: `task/${taskId}`,
          method: 'DELETE'
        }
      },
      invalidatesTags:['Task']
    }),
  })
})

export const {
  useLazyGetAllTaskQuery,
  useLazyGetOneTaskQuery,
  usePostTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = taskApi