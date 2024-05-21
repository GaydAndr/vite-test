import {Button, Stack} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {uiAction} from "../../../store/ui/ui_slice.ts";
import CreateBoard from "../CreateBoard/CreateBoard.tsx";

const HeaderNavBtn = () => {
  const menuDrawer = useAppSelector(state => state.ui.menuDrawer)
  const dispatch = useAppDispatch()
  const handlerHistoryBtn = () => {
    dispatch(uiAction.toggleHistory(true))
    if (menuDrawer) {
      dispatch(uiAction.toggleMenu(false))
    }
  }
  return (
    <Stack spacing={2} direction={{xs: 'column', sm: 'row'}} alignItems={"center"}>
      <CreateBoard/>
      <Button
        variant="contained"
        onClick={handlerHistoryBtn}
      >
        History
      </Button>
    </Stack>
  );
};

export default HeaderNavBtn;