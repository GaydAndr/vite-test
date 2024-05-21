import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import TitleOptions from "../TitleOptions/TitleOptions.tsx";

interface IProps {
  open: boolean
  boardTitle: string
  handleClose: () => void
  id: string
}

const TitleDialog = ({open, boardTitle, id, handleClose}: IProps) => {

  const handelClick = () => {
    handleClose()
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {boardTitle}
        </DialogTitle>
        <DialogContent>
          <TitleOptions boardTitle={boardTitle} id={id}/>
        </DialogContent>
        <DialogActions>
          <Button
            aria-label={'close'}
            onClick={handelClick}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TitleDialog;