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

instance.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  (config) => {
    // console.log(config);
    console.log();
    const token = JSON.parse(
      JSON.parse(localStorage.getItem("persist:auth") || "{}").user
    ).token;
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export const todoApi = {
  signup: (Name: string, Email: string, Password: string) => {
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
