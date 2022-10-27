import axios from "./axios";
import type { AxiosResponse } from "axios";
import type { Task } from "@/interfaces/Task";

export const getTasks = async (): Promise<AxiosResponse<Task[], any>> =>
  await axios.get("/tasks");

export const getTask = async (id: string): Promise<AxiosResponse<Task, any>> =>
  await axios.get(`/tasks/${id}`);

export const createTask = async (task: Task): Promise<AxiosResponse<Task>> =>
  await axios.post("/tasks", task);

export const updateTask = async (
  id: string,
  task: Task
): Promise<AxiosResponse<Task>> => await axios.put(`/tasks/${id}`, task);

export const deleteTask = async (id: string): Promise<AxiosResponse<Task>> =>
  axios.delete(`/tasks/${id}`);
