import {Stack, TextField} from "@mui/material";
import CreateIconBtn from "../CreateIconBtn/CreateIconBtn.tsx";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import {ICreateTooltipText} from "../../../types/types.ts";
import React from "react";

interface Prop {
  inputText: string
  tooltipText: ICreateTooltipText
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  setInputTex: (event: string) => void
  addLabel: string
  labelText: string
}

const EditForm = ({inputText, tooltipText, handleClick, setInputTex, addLabel, labelText}: Prop) => {
  return (
    <>
      <Stack
        direction={"row"}
        component="form"
        spacing={1}
        width={'250px'}
        noValidate
        autoComplete="off"
        alignItems={"center"}
      >
        <TextField
          id="outlined-controlled"
          label={labelText}
          value={inputText}
          size="small"
          autoFocus
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInputTex(event.target.value);
          }}
        />
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={1}
        >
          <CreateIconBtn
            iconColor={'success'}
            type={'submit'}
            children={<AddCircleIcon fontSize="large"/>}
            ariaLabel={addLabel}
            disabled={!inputText}
            tooltipText={tooltipText}
            handleOnClick={handleClick}
          />
          <CreateIconBtn
            ariaLabel={'cancel'}
            iconColor={'error'}
            type={'button'}
            tooltipText={tooltipText}
            handleOnClick={handleClick}
            children={<CancelIcon/>}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default EditForm;