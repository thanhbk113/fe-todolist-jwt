import { useState } from "react";
import moment from "moment";
import { Input, message, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { todoApi } from "../../../api/todoAPi";
import { useAppSelector } from "../../../app/hooks";
import { authSelector } from "../../../features/authSlice";
import TodoDetails from "./TodoDetails";

const Todo = () => {
  const auth = useAppSelector(authSelector);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const addNewTodo = async () => {
    try {
      setInput(input.trim());
      if (input.length === 0) {
        message.error("Vui lòng nhập đầy đủ thông tin");
        return;
      }
      setLoading(true);
      const { data } = await todoApi.addTodo(input, auth.user?.user_id);
      message.success(data.message);
      setLoading(false);
      setInput("");
    } catch (error) {
      message.error("Error with your server");
    }
  };
  const now = moment();
  const icon = () => {
    if (now.hour() < 12) {
      return "🌞";
    }
    if (now.hour() < 19) {
      return "🏜";
    }

    return "🌙";
  };

  const dayNow = () => {
    if (now.day() === 0) {
      return "Chủ nhật";
    }
    return `thứ ${now.day() + 1}`;
  };

  return (
    <div className="text-white flex flex-col items-center justify-center mt-8">
      <div className="flex flex-col items-center justify-center mb-4">
        <p className="text-lg">
          Hôm nay là {dayNow()} {icon()}
        </p>
        <p className="text-xs text-blue-400 mb-4 mt-2">
          Thêm công việc cần làm vào đây nhé
        </p>
        <Input
          className="w-72"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="✍️ Thêm việc ..."
          addonAfter={
            <PlusOutlined
              size={10}
              className="cursor-pointer text-lg text-green-700 hover:text-black duration-200"
              onClick={() => addNewTodo()}
            />
          }
        />
      </div>
      {loading ? <Spin /> : <TodoDetails />}
    </div>
  );
};

export default Todo;
