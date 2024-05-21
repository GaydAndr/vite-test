import {FC, useState} from "react";
import {
  Typography
} from "@mui/material";
import {useAppSelector} from "../../../hooks/hooks.ts";
import TitleDialog from "./TitleDialog/TitleDialog.tsx";

const TitleBoard: FC = () => {
  const {name, id} = useAppSelector(
    state => state.board.currentBoard!
  )
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Typography
        variant="h4"
        maxWidth={'140px'}
        noWrap
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          cursor: 'pointer'
        }}
        onClick={handleClickOpen}
      >
        {name}
      </Typography>
      <TitleDialog open={open} boardTitle={name} id={id} handleClose={handleClose}/>
    </>
  );
};

export default TitleBoard;