import {IBoard} from "./board.types.ts";
import {ICreateTooltipText} from "./types.ts";

export interface ICategory {
  id: string;
  name: string;
  order: number
  board: IBoard
}
export interface IStoreCategory {
  categoryList: ICategory[]
  currentCategory: string
}

export interface PostCategory{
  boardId: string
  name: string
}

export const categoryTooltipText: ICreateTooltipText = {
  TYPE_TITLE: 'Type any name of category',
  ADD: 'Add category',
  CANCEL: 'Cancel',
}