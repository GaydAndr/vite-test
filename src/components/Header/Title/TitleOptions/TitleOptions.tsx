import {useEffect, useState} from 'react';
import {Button, Stack, TextField} from "@mui/material";
import {useAppSelector} from "../../../../hooks/hooks.ts";
import {useDeleteBoardMutation, useUpdateBoardMutation} from "../../../../services/board.ts";

interface Props {
  boardTitle: string
  id: string
}

const TitleOptions = ({boardTitle, id}: Props) => {
  const [edit, setEdit] = useState(false)
  const [title, setTitle] = useState(boardTitle)
  const boardId = useAppSelector(state => state.board.currentBoard?.id)

  const [updateTitle] = useUpdateBoardMutation()
  const [deleteBoard] = useDeleteBoardMutation()

  useEffect(() => {
    setEdit(false)
    setTitle(boardTitle)
  }, [open]);


  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (e.currentTarget.ariaLabel === 'save' && boardId && title) {
      updateTitle({
        id: boardId,
        name: title
      })
      setTitle(title)
      setEdit(!edit)
    }
    if (!edit) {
      setTitle(boardTitle)
    }
    if (e.currentTarget.ariaLabel === 'delete') {
      deleteBoard(id)
    }

    setEdit(!edit)
  };

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <>
      <Stack spacing={2} alignItems={"center"}>
        {edit ?
          <Stack
            component="form"
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={1}
          >
            <TextField
              id="standard-basic"
              label="New title"
              variant='filled'
              value={title}
              onChange={handelChange}
              autoFocus
            />
            <Button aria-label={'save'} onClick={handleClick} variant={"contained"} type={"submit"}>Save</Button>
            <Button aria-label={'cancel'} onClick={handleClick}>Cancel</Button>
          </Stack>
          : <Button aria-label={'edit'} onClick={handleClick} sx={{height: 56}}>Edit title</Button>
        }
        <Button aria-label={'delete'} onClick={handleClick} color={"error"} variant={"outlined"}>Delete</Button>
      </Stack>
    </>
  );
};

export default TitleOptions;