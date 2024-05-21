import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {useState} from "react";
import dayjs, {Dayjs} from "dayjs";

const TaskDatePicker = ({name}: {name: string}) => {
  const [value, setValue] = useState<null | Dayjs>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Deadline"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        name={name}
      />
    </LocalizationProvider>
  );
};

export default TaskDatePicker;