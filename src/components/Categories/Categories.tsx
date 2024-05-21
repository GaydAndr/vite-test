import CategoryHeader from "./CategoryHeader/CategoryHeader.tsx";
import TaskAddNew from "../Task/TaskAddNew/TaskAddNew.tsx";
import {Stack} from "@mui/material";
import {useAppSelector} from "../../hooks/hooks.ts";
import TaskForm from "../Task/TaskForm/TaskForm.tsx";
import TaskCard from "../Task/TaskCard.tsx";
import {useEffect, useState} from "react";

interface Prop {
  id: string
  name: string
  amount: number
}

const Categories = (prop: Prop) => {
  const boardTask = useAppSelector(
    state => state.task.taskList
  )

  const [amountTask, setAmountTask] = useState(0)
  const filteredTasks = boardTask?.filter(task => task.status === prop.name);

  useEffect(() => {
    setAmountTask(filteredTasks.length);
  }, [filteredTasks]);

  return (
    <>
      <TaskForm id={prop.id}/>
      <CategoryHeader id={prop.id} name={prop.name} amount={amountTask}/>
      <TaskAddNew categoryName={prop.name} categoryId={prop.id}/>
      <Stack
        maxHeight={'70vh'}
        overflow={"auto"}
        spacing={2}
        pl={1}
        pr={2}
      >
        {filteredTasks.map(task => (
            <TaskCard key={task.id} dataTask={task}/>
          )
        )}
      </Stack>
    </>
  );
};

export default Categories;