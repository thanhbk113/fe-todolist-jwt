import React from "react";
import TaskBar from "./components/TaskBar";
import Todo from "./components/Todo";

const Home = () => {
  return (
    <div className="min-h-screen w-screen">
      <TaskBar />
      <Todo />
    </div>
  );
};

export default Home;
