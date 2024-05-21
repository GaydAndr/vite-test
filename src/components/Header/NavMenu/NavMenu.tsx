import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import MyDrawer from "../../common/MyDrawer/MyDrawer.tsx";
import {uiAction} from "../../../store/ui/ui_slice.ts";
import {List} from "@mui/material";
import NavItem from "./NavItem/NavItem.tsx";
import HeaderNavBtn from "../HeaderNavBtn/HeaderNavBtn.tsx";

const NavMenu = () => {
  const dispatch = useAppDispatch()
  const menuDrawer = useAppSelector((state) => state.ui.menuDrawer)
  const handlerCloseMenu = () => {
    dispatch(uiAction.toggleMenu(false))
  }
  return (
    <>
      <MyDrawer
        drawerAnchor={'left'}
        drawerFunc={handlerCloseMenu}
        drawerState={menuDrawer}
      >
        <List>
          <NavItem children={<HeaderNavBtn/>}/>
          {/*<NavItem*/}
          {/*  children={*/}
          {/*    <History*/}
          {/*    />*/}
          {/*  }*/}
          {/*/>*/}

        </List>
      </MyDrawer>
    </>
  );
};

export default NavMenu;