import {Fade, IconButton, ListItemIcon, Menu, MenuItem} from "@mui/material";
import React, {useState} from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import {useDeleteCategoryMutation, useSwapOrderMutation} from "../../../services/category.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {uiAction} from "../../../store/ui/ui_slice.ts";
import getNeighbor from "../../../hooks/useGetNeighbor.ts";


interface Prop {
  id: string
  amount: number
}

const CategoryMenu = ({id, amount}: Prop) => {
  const dispatch = useAppDispatch();
  const categoryList = useAppSelector(state => state.category.categoryList)
  const [deleteCategory] = useDeleteCategoryMutation()
  const [swapOrder]=useSwapOrderMutation()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    deleteCategory(id)
    handleClose()
  };

  const handleEdit = () => {
    dispatch(uiAction.toggleCategoryInp({id,value: true}))
    handleClose()
  };

  const handelMove = (e: React.MouseEvent<HTMLLIElement, MouseEvent> )=>{
    if(e.currentTarget.ariaLabel?.includes('left')){
      const swapLeft = getNeighbor(categoryList,id,'left')
      swapLeft?  swapOrder(swapLeft): null
    }
    if(e.currentTarget.ariaLabel?.includes('right')){
      const swapRight = getNeighbor(categoryList,id,'right')
      swapRight? swapOrder(swapRight): null
    }
    handleClose()
  }


  return (
    <>
      <IconButton
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleEdit}>
          <ListItemIcon>
            <DriveFileRenameOutlineIcon color={'info'}/>
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem onClick={(e)=>handelMove(e)} aria-label={'move-right'}>
          <ListItemIcon>
            <EastIcon color={'success'}/>
          </ListItemIcon>
          Move right
        </MenuItem>
        <MenuItem onClick={(e)=>handelMove(e)} aria-label={'move-left'}>
          <ListItemIcon>
            <WestIcon color={'success'}/>
          </ListItemIcon>
         Move left
        </MenuItem>
        <MenuItem onClick={handleDelete} disabled={!!amount} >
          <ListItemIcon >
            <DeleteOutlineIcon color={'error'}/>
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default CategoryMenu;