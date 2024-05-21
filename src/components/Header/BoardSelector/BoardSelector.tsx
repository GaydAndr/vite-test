import {Button, Dialog, DialogTitle} from "@mui/material";
import {useState} from "react";
import BoardsList from "../../common/BoardsList/BoardsList.tsx";
import {useLazyGetAllBoardsQuery} from "../../../services/board.ts";

const BoardSelector = () => {
  const [getAllBoards]=useLazyGetAllBoardsQuery()
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    getAllBoards()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ml:1, width:'120px', p:0 }}>
        Select Board
      </Button>
      <Dialog
        onClose={handleClose}
        open={open}
        fullWidth={true}

      >
        <DialogTitle>Chose board</DialogTitle>
        <BoardsList onCloseDrawer={handleClose}/>
      </Dialog>
    </>
  );
};

export default BoardSelector;