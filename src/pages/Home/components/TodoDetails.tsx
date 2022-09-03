import {
  BorderOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Spin } from "antd";
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
    setLoading(true);
    const { data } = await todoApi.getAllTodo(auth.user?.user_id);
    setLoading(false);
    setTodos(data.data.Todos);
  };

  const doneTask = async (todo: Todo, done: boolean) => {
    setLoading(true);
    await todoApi.editTodo(
      {
        Id: todo.Id,
        created_at: todo.created_at,
        done,
        task: todo.task,
      },
      auth.user?.user_id
    );
    getTodos();
  };

  const deleteTask = async (todo: Todo) => {
    setLoading(true);
    await todoApi.deleteTodo(
      {
        Id: todo.Id,
        created_at: todo.created_at,
        done: todo.done,
        task: todo.task,
      },
      auth.user?.user_id
    );
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, [auth.user]);
  return (
    <div>
      {loading ? (
        <Spin />
      ) : (
        <div>
          {todos.map((todo) => (
            <div
              className={`flex items-center justify-between ${
                todo.done
                  ? "text-white bg-purple-400 line-through"
                  : "text-black bg-white"
              } cursor-pointer text-sm font-extralight rounded-md p-2 my-2 w-72`}
              key={todo.Id}
            >
              <div className="flex items-center gap-2">
                {todo.done ? (
                  <CheckCircleOutlined
                    className="text-green-700 text-lg"
                    onClick={() => doneTask(todo, false)}
                  />
                ) : (
                  <BorderOutlined onClick={() => doneTask(todo, true)} />
                )}
                <span>{todo.task}</span>
              </div>
              <div className="flex items-center gap-2">
                <EditOutlined className="text-blue-600" />
                <DeleteOutlined
                  onClick={() => deleteTask(todo)}
                  className="text-red-600"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoDetails;
