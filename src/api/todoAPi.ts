import axios from "axios";

const instance = axios.create({
  baseURL: "https://todo-api-bk.herokuapp.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export const todoApi = {
  signup: (name: string, email: string, password: string) => {
    return instance.post("/signup", {
      name,
      email,
      password,
    });
  },
  login: (email: string, password: string) => {
    return axios.post("/login", {
      email,
      password,
    });
  },
  getAllTodo: (userId: string) => {
    return instance.get(`todos/${userId}`);
  },
};
