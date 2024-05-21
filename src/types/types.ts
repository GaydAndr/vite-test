import {IBoard} from "./board.types.ts";

export interface ICreateTooltipText{
  TYPE_TITLE: string
  ADD: string
  CANCEL: string,
}

export interface ServerResponse<T> {
  data: T[]
}

export interface IResponseBoardsList {
  boardsList: IBoard[];
}

export interface IStoreBoard {
  currentBoard: IBoard | null;
  boardsList: IBoard[] | null;
}


export interface IPostBoard {
  board: IBoard
}


export interface ITaskPost {
  task_name: string;
  status: string;
  due_date: string;
  priority: string;
  description: string;
  board: {
    id: string;
  };
}

export interface ITaskResponse extends ITaskPost {
  id: string;
  transfer_date: string;
}
