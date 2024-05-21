import React, {useState} from 'react';
import {useAppSelector} from "../../../hooks/hooks.ts";
import { Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {usePostCategoryMutation} from "../../../services/category.ts";
import {categoryTooltipText} from "../../../types/category.types.ts";
import EditForm from "../../common/EditForm/EditForm.tsx";

const CategoryAddNew = () => {
  const [addNewCategory] = usePostCategoryMutation()
  const boardId = useAppSelector(
    state => state.board.currentBoard?.id
  )

  const [active, setActive] = useState(false)
  const [categoryName, setCategoryName] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (active && e.currentTarget.ariaLabel?.includes('add') && boardId) {
      addNewCategory({boardId, name: categoryName})
      setCategoryName('')
    }

    setActive(!active);
    setCategoryName('')

  };

  return (
    <>
      {active ?
        <EditForm
          inputText={categoryName}
          tooltipText={categoryTooltipText}
          handleClick={handleClick}
          setInputTex={setCategoryName}
          addLabel={'addCategory'}
          labelText={'Category name'}
        />
        :
        <Button
          aria-label={'openForm'}
          variant="outlined"
          size="large"
          fullWidth
          sx={{
            color: "#232323",
            borderStyle: 'dashed',
          }}
          onClick={handleClick}
          startIcon={<AddIcon/>}
        >
          Create new category
        </Button>
      }
    </>
  );
};

export default CategoryAddNew;