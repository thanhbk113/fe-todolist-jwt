import {
  BorderOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Input, Popover, Spin } from "antd";
import { useEffect, useState } from "react";
import { todoApi } from "../../../api/todoAPi";
import { useAppSelector } from "../../../app/hooks";
import { authSelector } from "../../../features/authSlice";
import { Todo } from "../../../share/type";

const TodoDetails = () => {
  const auth = useAppSelector(authSelector);
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editText, setEditText] = useState("");
  const getTodos = async () => {
    try {
      setLoading(true);
      const { data } = await todoApi.getAllTodo(auth.user?.user_id);
      setLoading(false);
      setTodos(data.data.Todos);
    } catch (error: any) {
      if (error.response.data.error === "mongo: no documents in result") {
        await todoApi.addTodo("Tạo công việc đầu tiên", auth.user?.id);
        setLoading(false);
      }
    }
  };

  const doneTask = async (todo: Todo) => {
    setLoading(true);
    await todoApi.editTodo(
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              } cursor-pointer text-sm font-extralight rounded-md p-[0.28rem] my-2 w-72`}
              key={todo.Id}
            >
              <div className="flex items-center gap-2">
                {todo.done ? (
                  <CheckCircleOutlined
                    className="text-green-700 text-lg"
                    onClick={() =>
                      doneTask({
                        Id: todo.Id,
                        done: false,
                        created_at: todo.created_at,
                        task: todo.task,
                      })
                    }
                  />
                ) : (
                  <BorderOutlined
                    onClick={() =>
                      doneTask({
                        Id: todo.Id,
                        done: true,
                        created_at: todo.created_at,
                        task: todo.task,
                      })
                    }
                    className="text-xl"
                  />
                )}
                <span>{todo.task}</span>
              </div>
              <div className="flex items-center gap-2">
                <Popover
                  content={
                    <Input
                      defaultValue={todo.task}
                      addonAfter={
                        <SendOutlined
                          onClick={() =>
                            doneTask({
                              Id: todo.Id,
                              done: todo.done,
                              created_at: todo.created_at,
                              task: editText,
                            })
                          }
                        />
                      }
                      onChange={(e) => setEditText(e.target.value)}
                    />
                  }
                  trigger="click"
                >
                  <EditOutlined className="text-blue-600" />
                </Popover>
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
