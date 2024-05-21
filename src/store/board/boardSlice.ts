import {createSlice} from "@reduxjs/toolkit";
import {IStoreBoard} from "../../types/types.ts";
import {boardApi} from "../../services/board.ts";

const initialState: IStoreBoard = {
  currentBoard: null,
  boardsList: null,
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard: (state, {payload}) => {
      state.currentBoard = payload
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      boardApi.endpoints.postBoard.matchFulfilled, (state, {payload}) => {
        state.currentBoard = payload.board
      }
    )
    builder.addMatcher(
      boardApi.endpoints.getAllBoards.matchFulfilled, (state, {payload}) => {
        state.boardsList = payload
      }
    )
    builder.addMatcher(
      boardApi.endpoints.getOneBoard.matchFulfilled, (state, {payload}) => {
        state.currentBoard = payload
      }
    )
    builder.addMatcher(
      boardApi.endpoints.updateBoard.matchFulfilled, (state, {payload}) => {
        state.currentBoard!.name = payload.name
      }
    )
    builder.addMatcher(
      boardApi.endpoints.deleteBoard.matchFulfilled, (state, {payload}) => {
        if (state.boardsList) {
          state.boardsList = state.boardsList.filter((board) => board.id !== payload.id)
        }
        if (payload.id === state.currentBoard?.id) {
          state.currentBoard = null
        }
      }
    )
  }
})

export const boardAction = boardSlice.actions

export default boardSlice