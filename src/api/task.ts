import { generateParams } from "@/utils/constants";
import { ITask, ITaskParams } from "@/utils/interface";
import { notification } from "antd";
import { ArgsProps } from "antd/es/notification";
import request from "./request";

const PREFIX = "/tasks";

const fetchTask = (userId: string) => {
  return request.get(`${PREFIX}/${userId}`);
};
const addNewTask = async (params: ITask) => {
  try {
    return await request.post(`${PREFIX}`, params);
  } catch (error: unknown) {
    notification.error(error as ArgsProps);
  }
  return request.post(`${PREFIX}`, params);
};

const searchListTasks = async (params: ITaskParams) => {
  try {
    return (await request.get(`${PREFIX}${generateParams(params)}`)) as ITask[];
  } catch (error: unknown) {
    notification.error(error as ArgsProps);
  }
};
const deleteTask = async (taskId: string) => {
  try {
    return await request.delete(`${PREFIX}/${taskId}`);
  } catch (error: unknown) {
    notification.error(error as ArgsProps);
  }
};

const updateTask = async (taskId: string, params: ITask) => {
  try {
    return await request.put(`${PREFIX}/${taskId}`, params);
  } catch (error: unknown) {
    notification.error(error as ArgsProps);
  }
};

export { addNewTask, deleteTask, fetchTask, searchListTasks, updateTask };

