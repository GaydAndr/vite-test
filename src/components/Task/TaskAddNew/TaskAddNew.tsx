import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {uiAction} from "../../../store/ui/ui_slice.ts";
import {categoryAction} from "../../../store/category/categorySlice.ts";

interface Prop {
  categoryName: string
  categoryId: string
}

const TaskAddNew = ({categoryName, categoryId}: Prop) => {
  const dispatch = useAppDispatch()
  const handlerAddCardBtn = () => {
    dispatch(uiAction.toggleTaskForm({id: categoryId, value: true}))
    dispatch(categoryAction.setCurrentCategory(categoryName))
  }
  return (
    <>
      <Button
        variant="outlined"
        disableElevation
        size="large"
        fullWidth
        sx={{
          color: "#232323",
          mt: 2,
          mb: 2,
          borderStyle: 'dashed'
        }}
        startIcon={<AddIcon/>}
        onClick={handlerAddCardBtn}
      >
        Add new card
      </Button>
    </>
  );
};

export default TaskAddNew;