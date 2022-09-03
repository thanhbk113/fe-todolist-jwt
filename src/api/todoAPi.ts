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
  editTodo: (todo: Todo, userId?: string) => {
    return instance.put(`/todo/${userId}`, {
      Id: todo.Id,
      task: todo.task,
      created_at: todo.created_at,
      done: todo.done,
    });
  },
  deleteTodo: (todo: Todo, userId?: string) => {
    return instance.delete(`/todo/${userId}`, {
      data: {
        Id: todo.Id,
        task: todo.task,
        created_at: todo.created_at,
        done: todo.done,
      },
    });
  },
  getAllTodo: (userId?: string) => {
    return instance.get(`todos/${userId}`);
  },
};
