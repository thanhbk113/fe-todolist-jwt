import axios from "axios";
import { Todo } from "../share/type";

const instance = axios.create({
  baseURL: "https://todo-api-bk.herokuapp.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
export const todoApi = {
  signup: (Name: string, Email: string, Password: string) => {
    return instance.post(
      "/signup",
      {
        Name,
        Email,
        Password,
      }
      // { withCredentials: true }
    );
    return instance.post("/signup", {
      Name,
      Email,
      Password,
    });
  },
  login: (email: string, password: string) => {
    return instance.post("/login", {
      email,
      password,
    });
  },
  addTodo: (Task: string, userId?: string) => {
    return instance.post(`todo/${userId}`, {
      Task,
      Done: false,
    });
  },
  editTodo: (todo: Todo, todosId?: string) => {
    return instance.post(`/todo/${todosId}`, {
      Id: todo.Id,
      task: todo.task,
      created_at: todo.created_at,
      done: todo.done,
    });
  },
  getAllTodo: (userId?: string) => {
    return instance.get(`todos/${userId}`);
  },
};
