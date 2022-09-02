import {
  BorderOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { message, Spin } from "antd";
import { useEffect, useState } from "react";
import { todoApi } from "../../../api/todoAPi";
import { useAppSelector } from "../../../app/hooks";
import { authSelector } from "../../../features/authSlice";
import { Todo } from "../../../share/type";

const TodoDetails = () => {
  const auth = useAppSelector(authSelector);
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(auth.user?.id);
  const getTodos = async () => {
    try {
      setLoading(true);
      const { data } = await todoApi.getAllTodo(auth.user?.user_id);
      setLoading(false);
      setTodos(data.data.Todos);
    } catch (error: any) {
      if (error.response.data.error === "mongo: no documents in result") {
        setLoading(false);
        message.error("Error your server");
      }
    }
  };

  const doneTask = async (todo: Todo) => {
    setLoading(true);
    const { data } = await todoApi.editTodo(
      {
        Id: todo.Id,
        created_at: todo.created_at,
        done: true,
        task: todo.task,
      },
      auth.user?.id
    );
    setLoading(false);
    console.log(data.data.Todos);
    setTodos(data.data.Todos);
  };

  useEffect(() => {
    if (auth.user !== null) {
      getTodos();
    }
  }, [auth.user]);
  return (
    <div>
      {loading ? (
        <Spin />
      ) : (
        <div>
          {todos.map((todo) => (
            <div
              className="flex items-center justify-between bg-white text-black cursor-pointer text-sm font-extralight rounded-md p-2 my-2 w-72"
              key={todo.Id}
            >
              <div className="flex items-center gap-2">
                <BorderOutlined onClick={() => doneTask(todo)} />
                <span>{todo.task}</span>
              </div>
              <div className="flex items-center gap-2">
                <EditOutlined />
                <DeleteOutlined />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoDetails;
