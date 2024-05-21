import {Drawer} from "@mui/material";

interface Props {
  children: React.ReactNode;
  drawerState: boolean
  drawerAnchor: "left" | "top" | "right" | "bottom" | undefined
  drawerFunc: () => void
}

const MyDrawer = ({children, drawerState, drawerAnchor, drawerFunc}: Props) => {

  const toggleDrawer =
    () =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          console.log(1)

          return;
        }
        drawerFunc()
      };
  return (
    <>
      <Drawer open={drawerState} anchor={drawerAnchor} onClose={toggleDrawer()}>
        {children}
      </Drawer>
    </>
  )
};

export default MyDrawer;