import {styled, alpha} from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Button, Menu, MenuItem, MenuProps} from "@mui/material";
import React, {useState} from "react";
import {useAppSelector} from "../../../hooks/hooks.ts";
import {useUpdateTaskMutation} from "../../../services/task.ts";
// import {getBoard} from "../../../../store/board/boardOperation.ts";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    sx={{
      maxHeight: 48 * 4.5,
      width: '20ch',
    }}
    {...props}
  />
))(({theme}) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 200,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const TaskMoveTo = ({id, title}: { id: string, title: string }) => {
  const {categoryList} = useAppSelector(
    state => state.category
  )
  const [changeStatus] = useUpdateTaskMutation()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const moveTo = (status: string) => {
    handleClose();
    changeStatus({id, body: {status}})
  };
  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon/>}
        fullWidth
        sx={{
          justifyContent: 'space-between'
        }}
      >
        Move to
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {
          categoryList?.map(el => (
              <MenuItem
                key={el.id}
                onClick={() => moveTo(el.name)}
                disableRipple
                disabled={title === el.name}
              >
                {el.name}
              </MenuItem>
            )
          )
        }

      </StyledMenu>
    </>
  );
}

export default TaskMoveTo;