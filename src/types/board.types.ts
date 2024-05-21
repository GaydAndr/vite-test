import {IHistory} from "./history.types.ts";
import {ITask} from "./task.types.ts";
import {ICategory} from "./category.types.ts";
import {ICreateTooltipText} from "./types.ts";

export interface IBoard {
  id: string;
  name: string;
  createdAt: string;
  history: IHistory[];
  tasks_list: ITask[];
  sub_list:ICategory[]
}

export interface BoardResponse{
  board: IBoard
}

export interface PostBoard {
  id: string;
  name: string;
}

export const boardTooltipText:ICreateTooltipText = {
  TYPE_TITLE: 'Type any name of board',
  ADD: 'Add board',
  CANCEL: 'Cancel',
}

