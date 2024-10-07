export interface IRes {
  data: any;
  error_code: number;
  msg: string;
}

export interface ITask {
  id?: string;
  taskName: string;
  status: boolean;
  description: string;
}

export interface ITaskParams {
  taskName: string;
  status: boolean | null;
  description?: string;
}
