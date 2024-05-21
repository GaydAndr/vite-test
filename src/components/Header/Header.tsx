import {FC} from "react";
import {AppBar, Box, CssBaseline, IconButton, Stack, Toolbar} from "@mui/material";
import TitleBoard from "./Title/TitleBoard.tsx";
import HeaderNavBtn from "./HeaderNavBtn/HeaderNavBtn.tsx";
import MenuIcon from '@mui/icons-material/Menu';
import BoardSelector from "./BoardSelector/BoardSelector.tsx";
import NavMenu from "./NavMenu/NavMenu.tsx";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {uiAction} from "../../store/ui/ui_slice.ts";

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const handlerMenuBtn = () => {
    dispatch(uiAction.toggleMenu(true))
  };

  return (
    <>
      <CssBaseline/>
      <AppBar
        component="nav"
        color={'transparent'}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handlerMenuBtn}
            sx={{mr: 2, display: {sm: 'none'}}}
          >
            <MenuIcon/>
          </IconButton>
          <Stack
            direction={"row"}
            flexGrow={1}
            justifyContent={{xs: "space-between", sm:'flex-start'}}
          >
            <TitleBoard/>
            <BoardSelector/>
          </Stack>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            <HeaderNavBtn/>
          </Box>
        </Toolbar>
      </AppBar>
      <NavMenu/>
    </>

  )
    ;
};

export default Header;