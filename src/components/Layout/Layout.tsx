import {FC} from "react";
import Header from "../Header/Header.tsx";
import MainGrid from "../Categories/MainGrid/MainGrid.tsx";
import {Box, Toolbar} from "@mui/material";
import History from "../History/History.tsx";

const Layout: FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        // bgcolor: 'rgba(154,86,194,0.51)'
        overflow: 'hidden'
      }}>
      <Header/>
      <Toolbar/>
      <History/>
      <MainGrid/>
    </Box>
  );
};

export default Layout;