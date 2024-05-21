import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MyDrawer from "../common/MyDrawer/MyDrawer.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {uiAction} from "../../store/ui/ui_slice.ts";

const History = () => {
  const dispatch = useAppDispatch()
  const historyDrawer = useAppSelector((state) => state.ui.historyDrawer)
  const handlerCloseHistory = () => {
    dispatch(uiAction.toggleHistory(false))
  }
  return (
    <>
      <MyDrawer drawerState={historyDrawer} drawerAnchor={'right'} drawerFunc={handlerCloseHistory}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MyDrawer>
    </>
  );
};

export default History;