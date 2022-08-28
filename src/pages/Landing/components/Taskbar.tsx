import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Taskbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-around p-2">
      <div>
        <img alt="" className="w-20" src="images/lg-todo.png" />
      </div>
      <div className="text-green-700">
        <Button
          onClick={() => navigate("/signup")}
          className="w-24 mr-2 bg-slate-300 rounded-md p-1"
        >
          <span className="opacity-60 hover:opacity-100">Đăng kí</span>
        </Button>
        <Button
          onClick={() => navigate("/login")}
          className="w-24 bg-slate-300 rounded-md p-1"
        >
          <span className="opacity-60 hover:opacity-100">Đăng nhập</span>
        </Button>
      </div>
    </div>
  );
};

export default Taskbar;
