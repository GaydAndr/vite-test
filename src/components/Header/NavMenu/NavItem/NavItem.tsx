import {ListItem, ListItemButton} from "@mui/material";

interface IProps {
  children: React.ReactNode;
  closeFunc?: () => void
}

const NavItem = ({children, closeFunc}: IProps) => {
  return (
    <>
      <ListItem disablePadding onClick={closeFunc}>
        <ListItemButton>
          {children}
        </ListItemButton>
      </ListItem>
    </>
  )

};

export default NavItem;