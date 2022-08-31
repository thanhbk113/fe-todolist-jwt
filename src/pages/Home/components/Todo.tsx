import React from "react";
import moment from "moment";
import { Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Todo = () => {
  const now = moment();
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg">Hôm nay là thứ {now.day() + 1} 🍀</p>
        <p className="text-xs text-blue-400 mb-4 mt-2">
          Thêm công việc cần làm vào đây nhé
        </p>
        <Input addonAfter={<PlusOutlined className="cursor-pointer" />} />
      </div>
    </div>
  );
};

export default Todo;
