import axios from "axios";

const BASE_URL = "http://localhost:8080/tasks";

export const getAllTasks = () => axios.get(BASE_URL);
export const getTaskById = (id: string) => axios.get(`${BASE_URL}/${id}`);
export const createTask = (task: any) => axios.post(BASE_URL, task);
export const updateTask = (task: any) => axios.put(BASE_URL, task);
export const deleteTask = (id: string) => axios.delete(`${BASE_URL}/${id}`);
export const runTask = (id: string, namespace: string, podName: string, containerName: string) =>
  axios.put(`${BASE_URL}/${id}/run?namespace=${namespace}&podName=${podName}&containerName=${containerName}`);
