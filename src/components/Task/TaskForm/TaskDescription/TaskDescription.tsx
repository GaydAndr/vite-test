import {TextField} from "@mui/material";

const TaskDescription = ({name}: {name: string}) => {
  return (
    <TextField
      id="outlined-multiline-static"
      label="Description"
      multiline
      rows={4}
      name={name}
      defaultValue="Default Value"
    />
  );
};

export default TaskDescription;