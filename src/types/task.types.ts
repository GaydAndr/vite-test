import {IBoard} from "./board.types.ts";

export interface ITask {
  id: string;
  name: string;
  status: string;
  due_date: string;
  priority: string;
  description: string;
  transfer_date: string;
}

export interface IPostTask {
  name: string;
  status: string;
  due_date: string;
  priority: string;
  description: string;
  board: IBoard;
}