import {Stack, Typography} from "@mui/material";
import CategoryMenu from "../CategoryMenu/CategoryMenu.tsx";
import EditForm from "../../common/EditForm/EditForm.tsx";
import React, {useEffect, useState} from "react";
import {categoryTooltipText} from "../../../types/category.types.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {uiAction} from "../../../store/ui/ui_slice.ts";
import {useUpdateCategoryMutation} from "../../../services/category.ts";

interface Prop {
  name: string
  amount: number
  id: string
}

const CategoryHeader = ({id, name, amount}: Prop) => {
  const dispatch = useAppDispatch();
  const categoryInpState = useAppSelector(state => state.ui.categoryInput)
  const [updateCategory]=useUpdateCategoryMutation()

  const [categoryName, setCategoryName] = useState(name)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (Object.keys(categoryInpState)[0] === id) {
      setActive(Object.values(categoryInpState)[0])
    }
  }, [categoryInpState]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (active && e.currentTarget.ariaLabel?.includes('add')) {
      updateCategory({id, name: categoryName})
    }
    dispatch(uiAction.toggleCategoryInp({}))
    setActive(!active);
    setCategoryName(categoryName)
  }

  return (
    <Stack
      direction={"row"}
      spacing={2}
      border={active ? 0 : 2}
      borderColor={"lightgrey"}
      borderLeft={0}
      borderRight={0}
      alignItems={"center"}
      marginTop={active ? '3px' : 0}
    >
      {active ?
        <EditForm
          inputText={categoryName}
          tooltipText={categoryTooltipText}
          addLabel={'addNewName'}
          handleClick={handleClick}
          setInputTex={setCategoryName}
          labelText={'Category name'}
        />
        :
        <>
          <Typography variant="h5" flexGrow={1} textAlign={"left"}>
            {name}
          </Typography>
          <Typography variant="h5">
            {amount}
          </Typography>
        </>
      }
      <CategoryMenu id={id} amount={amount}/>
    </Stack>
  );
};

export default CategoryHeader;