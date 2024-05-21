export interface IHistory {
  id: string;
  person: string;
  act: string;
  task_name: string;
  task_rename: string | null;
  act_from: string;
  act_to: string | null;
  transfer_date: string;
}