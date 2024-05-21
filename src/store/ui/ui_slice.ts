import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUIState {
  menuDrawer: boolean
  historyDrawer: boolean
  taskForm: {
    [key: string]: boolean
  }
  categoryInput: {
    [key: string]: boolean
  }
}

const initialState: IUIState = {
  menuDrawer: false,
  historyDrawer: false,
  taskForm: {},
  categoryInput: {}
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleHistory: (state, {payload}: PayloadAction<boolean>) => {
      state.historyDrawer = payload
    },
    toggleTaskForm: (state, {payload}: PayloadAction<{ id?: string, value?: boolean }>) => {
      const {id, value} = payload;
      if (id && value) {
        state.taskForm = {[id]: value};
        return
      }
      state.taskForm = {}
    },
    toggleMenu: (state, {payload}: PayloadAction<boolean>) => {
      state.menuDrawer = payload
    },
    toggleCategoryInp: (state, {payload}: PayloadAction<{ id?: string, value?: boolean }>) => {
      const {id, value} = payload;
      if (id && value) {
        state.categoryInput = {[id]: value};
        return
      }
      state.categoryInput = {}
    },
  }
})

export const uiAction = uiSlice.actions

export default uiSlice