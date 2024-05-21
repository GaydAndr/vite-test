import AddIcon from "@mui/icons-material/Add";
import {Button} from "@mui/material";
import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {uiAction} from "../../../store/ui/ui_slice.ts";
import {usePostBoardMutation} from "../../../services/board.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {useCreateDefCategoriesMutation} from "../../../services/category.ts";
import EditForm from "../../common/EditForm/EditForm.tsx";
import {boardTooltipText} from "../../../types/board.types.ts";
import {taskAction} from "../../../store/task/taskSlice.ts";

const CreateBoard = () => {
  const dispatch= useAppDispatch();
  const navState=useAppSelector(state => state.ui.menuDrawer)

  const [postBoard, {isSuccess}] = usePostBoardMutation()
  const [createDefCategory]=useCreateDefCategoriesMutation()

  const [active, setActive] = useState(false)
  const [boardTitle, setBoardTitle] = useState('');
  const [localBoardID, setLocalBoardID] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const boardId = uuidv4();
    setLocalBoardID(boardId)
    if (active && e.currentTarget.ariaLabel === 'addBoard') {
      postBoard({id: boardId, name: boardTitle})
      dispatch(taskAction.setTask([]))
      setBoardTitle('')
    }
    if(active && navState){
      dispatch(uiAction.toggleMenu(false))
    }
    setActive(!active);
    setBoardTitle('')
  };

  useEffect(() => {
    if(isSuccess){
      createDefCategory(localBoardID)
      setLocalBoardID('null')
    }
  }, [isSuccess]);
  return (
    <>
      {active ?
        <EditForm
          inputText={boardTitle}
          tooltipText={boardTooltipText}
          handleClick={handleClick}
          setInputTex={setBoardTitle}
          addLabel={'addBoard'}
          labelText={'Add Board'}
          />
        :
        <Button
          aria-label={'createList'}
          variant="outlined"
          startIcon={<AddIcon/>}
          onClick={handleClick}
        >
          Create new list
        </Button>
      }
    </>
  );
};

export default CreateBoard;