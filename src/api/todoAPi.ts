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
  getAllTodo: (userId: string) => {
    return instance.get(`todos/${userId}`);
  },
};
