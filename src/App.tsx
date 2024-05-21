import './App.css'
// import Layout from "./components/Layout/Layout.tsx";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./hooks/hooks.ts";
// import BoardsList from "./components/common/BoardsList/BoardsList.tsx";
import {useLazyGetAllBoardsQuery} from "./services/board.ts";
// import {Box} from "@mui/material";
import {boardAction} from "./store/board/boardSlice.ts";
// import CreateBoard from "./components/Header/CreateBoard/CreateBoard.tsx";
import {categoryAction} from "./store/category/categorySlice.ts";
import {taskAction} from "./store/task/taskSlice.ts";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [getAllBoards] = useLazyGetAllBoardsQuery()
  const dispatch = useAppDispatch()
  const [count, setCount] = useState(0)

  const {currentBoard, boardsList} = useAppSelector(
    state => state.board
  )
  useEffect(() => {
    if (!currentBoard && !boardsList) {
      getAllBoards()
    }
    if (!currentBoard && boardsList?.length) {
      dispatch(boardAction.setBoard(boardsList[0]))
      dispatch(categoryAction.setCategories(boardsList[0].sub_list))
      dispatch(taskAction.setTask(boardsList[0].tasks_list))
    }
  }, [boardsList])


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
