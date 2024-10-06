import request from "./request";

const PREFIX = "/tasks";

const fetchTask = (userId: string) => {
  return request.get(`${PREFIX}/${userId}`);
};
const addNewTask = (userId: string, content: string) => {
  return request.post(`${PREFIX}`, {
    userId,
    content,
  });
};

const searchListTasks = (userId: string, query: string) => {
  return request.get(`${PREFIX}/search?userId=${userId}&query=${query}`);
};
const deleteTask = (taskId: string) => {
  return request.delete(`${PREFIX}/${taskId}`);
};

const updateTask = (todoId: string) => {
  return request.put(`${PREFIX}/status`, {
    todoId,
  });
};

export { fetchTask, addNewTask, searchListTasks, deleteTask, updateTask };
