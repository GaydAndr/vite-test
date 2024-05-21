import './App.css'
import Layout from "./components/Layout/Layout.tsx";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./hooks/hooks.ts";
import BoardsList from "./components/common/BoardsList/BoardsList.tsx";
import {useLazyGetAllBoardsQuery} from "./services/board.ts";
import {Box} from "@mui/material";
import {boardAction} from "./store/board/boardSlice.ts";
import CreateBoard from "./components/Header/CreateBoard/CreateBoard.tsx";
import {categoryAction} from "./store/category/categorySlice.ts";
import {taskAction} from "./store/task/taskSlice.ts";

function App() {
  const [getAllBoards] = useLazyGetAllBoardsQuery()
  const dispatch = useAppDispatch()

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
      {!boardsList && <CreateBoard/>}
      {boardsList && !currentBoard &&
        <Box maxHeight={'80vh'} overflow={"auto"}>
          <CreateBoard/>
          <BoardsList/>
        </Box>
      }
      {!boardsList || currentBoard && <Layout/>}
    </>
  )
}

export default App
