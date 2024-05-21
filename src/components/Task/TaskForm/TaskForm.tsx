import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack} from "@mui/material";
import TaskField from "./TaskField/TaskField.tsx";
import TaskDatePicker from "./TaskDatePicker/TaskDatePicker.tsx";
import TaskDescription from "./TaskDescription/TaskDescription.tsx";
import TaskPriority from "./TaskPriority/TaskPriority.tsx";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {uiAction} from "../../../store/ui/ui_slice.ts";
import {categoryAction} from "../../../store/category/categorySlice.ts";
import React, {useEffect, useState} from "react";
import {usePostTaskMutation} from "../../../services/task.ts";

const TaskForm = ({id}: { id: string }) => {
  const dispatch = useAppDispatch()
  const taskFormState = useAppSelector(
    state => state.ui.taskForm
  )
  const currentBoard = useAppSelector(
    state => state.board.currentBoard
  )
  const currentCategory = useAppSelector(
    state => state.category.currentCategory
  )

  const [postTask] = usePostTaskMutation()

  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(taskFormState[id] || false)
  }, [taskFormState]);

  const handleClose = () => {
    dispatch(uiAction.toggleTaskForm({}))
    dispatch((categoryAction.removeCurrentCategory()))
    setActive(!active)
  };

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const postData = {
      "name": formJson.taskName,
      "status": currentCategory,
      "due_date": formJson.due_date,
      "priority": formJson.priority,
      "description": formJson.description,
      "board": currentBoard!
    }
    postTask(postData)

    handleClose();
  };
  return (
    <>
      <Dialog
        open={active}
        onClose={handleClose}
        maxWidth={"lg"}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => handlerSubmit(event),
        }}
      >
        <DialogTitle>Create Task</DialogTitle>
        <DialogContent>
          <Stack
            direction={'row'}
            spacing={2}
            sx={{pt: 1, mb: 2}}
            alignItems={'center'}
          >
            <TaskField label='Task name' type={'text'} name={'taskName'}/>
            <TaskPriority name='priority'/>
          </Stack>
          <Stack
            direction={'row'}
            spacing={2}
            sx={{pt: 1, mb: 2}}
          >
            <TaskDatePicker name='due_date'/>
            <TaskDescription name='description'/>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskForm;