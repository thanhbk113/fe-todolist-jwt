import React from "react";
import { Button } from "antd";

const Taskbar = () => {
  return (
    <div className="flex items-center justify-around p-2">
      <div>
        <img alt="" className="w-20" src="images/lg-todo.png" />
      </div>
      <div className="text-green-700">
        <Button className="w-16 mr-2 bg-slate-300 rounded-md p-1">
          <span className="opacity-60 hover:opacity-100">SignUp</span>
        </Button>
        <Button className="w-16 bg-slate-300 rounded-md p-1">
          <span className="opacity-60 hover:opacity-100">Login</span>
        </Button>
      </div>
    </div>
  );
};

export default Taskbar;
