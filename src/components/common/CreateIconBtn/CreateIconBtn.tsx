import {IconButton, Tooltip} from "@mui/material";
import React, {ReactElement, useState} from "react";
import {ICreateTooltipText} from "../../../types/types.ts";

interface Props {
  ariaLabel: string
  iconColor: 'success' | 'error' | 'primary'
  disabled?: boolean
  children: ReactElement
  handleOnClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  type: 'submit' | 'button'
  tooltipText:ICreateTooltipText
}





const CreateIconBtn = ({
                         ariaLabel,
                         iconColor,
                         handleOnClick,
                         disabled = false,
                         children,
                         type,
                         tooltipText
}: Props) => {
  const [open, setOpen] = useState(false);
  const [tooltipTitle, setTooltipTitle] = useState(tooltipText.CANCEL)

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    if(disabled && ariaLabel.includes('add')){
      setTooltipTitle(tooltipText.TYPE_TITLE)
    }
    else if(ariaLabel.includes('add')) {
      setTooltipTitle(tooltipText.ADD)
    }
    else {
      setTooltipTitle(tooltipText.CANCEL)
    }
    setOpen(true);
  };
  return (
    <>
      <Tooltip
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        title={tooltipTitle}
        followCursor
      >
        <div>
        <IconButton
          aria-label={ariaLabel}
          color={iconColor}
          onClick={e=> handleOnClick(e)}
          disabled={disabled}
          sx={{outline: 'none', p:0}}
          type={type}
        >
          {children}
        </IconButton>
        </div>
      </Tooltip>
    </>
  );
}

export default CreateIconBtn;