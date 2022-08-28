import React from "react";
import "antd/dist/antd.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RequiredAuth from "./components/RequiredAuth";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Landing from "./pages/Landing";
import { todoApi } from "./api/todoAPi";

const getLogin = async () => {
  const res: any = await todoApi.getAllTodo("6304fb93c67d6b0851a1e259");

  console.log("Hello");
  console.log(res);
};

function App() {
  getLogin();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<RequiredAuth>Home</RequiredAuth>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
