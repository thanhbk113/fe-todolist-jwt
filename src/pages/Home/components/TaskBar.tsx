import React from "react";
import { Avatar, Button, Dropdown } from "antd";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { authSelector, logout } from "../../../features/authSlice";

const TaskBar = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(authSelector);
  const menu = (
    <div className="flex flex-col items-center bg-gray-50 p-2">
      <p className="text-green-300 mb-4">{auth.user?.name} 👋</p>
      <Button
        className="text-gray-500 rounded-md"
        onClick={() => dispatch(logout())}
      >
        Đăng xuất
      </Button>
    </div>
  );
  return (
    <div className="flex items-center justify-around p-2">
      <div>
        <img alt="" className="w-20" src="images/lg-todo.png" />
      </div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Avatar className="cursor-pointer">
          {auth.user?.name.charAt(0).toUpperCase()}
        </Avatar>
      </Dropdown>
    </div>
  );
};

export default TaskBar;
