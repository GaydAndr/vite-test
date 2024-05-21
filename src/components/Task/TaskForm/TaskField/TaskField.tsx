import {FC} from "react";
import {TextField} from "@mui/material";

interface ICardField {
  name: string
  label: string
  type: string
}

const TaskField: FC<ICardField> = ({name, label, type}) => {
  return <TextField
    autoFocus
    required
    margin="dense"
    id={name}
    name={name}
    label={label}
    type={type}
    fullWidth
    variant="standard"
  />;
};

export default TaskField