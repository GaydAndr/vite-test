import {IconButton, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {useDeleteBoardMutation, useLazyGetOneBoardQuery} from "../../../services/board.ts";
import DeleteIcon from '@mui/icons-material/Delete';
import {categoryAction} from "../../../store/category/categorySlice.ts";
import {taskAction} from "../../../store/task/taskSlice.ts";

export interface SimpleDialogProps {
  onCloseDrawer?: () => void;
}

const BoardsList = ({onCloseDrawer}: SimpleDialogProps) => {
  const dispatch = useAppDispatch();
  const [getOneBoard] = useLazyGetOneBoardQuery()
  const [deleteBoard] = useDeleteBoardMutation()
  const boardsList = useAppSelector(
    state => state.board.boardsList
  )

  const handleListItemClick = (id: string) => {
    getOneBoard(id).then(result => {
        if (result.data) {
          dispatch(categoryAction.setCategories(result.data.sub_list))
          dispatch(taskAction.setTask(result.data.tasks_list))
        }
      }
    )
    if (onCloseDrawer) onCloseDrawer();
  };

  const handelDelete = (id: string) => {
    deleteBoard(id)
  };

  return (
    <>
      <List component="nav" aria-label="secondary mailbox folder">
        {boardsList?.map((board) => (
          <ListItem
            key={board.id}
            sx={{paddingLeft: 2, paddingRight: 2}}
            secondaryAction={
              <IconButton
                edge="end" aria-label="delete"
                color={"error"}
                onClick={() => handelDelete(board.id)}
              >
                <DeleteIcon/>
              </IconButton>
            }
          >
            <ListItemButton
              onClick={() => handleListItemClick(board.id)}
              dense
            >
              <ListItemText secondary={board.name}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default BoardsList;