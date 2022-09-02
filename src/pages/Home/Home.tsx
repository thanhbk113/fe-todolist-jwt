import React from "react";
import TaskBar from "./components/TaskBar";
import Todo from "./components/Todo";

const Home = () => {
  return (
    <div className="min-h-screen w-screen bg-[rgba(2,6,49,255)]">
      <TaskBar />
      <Todo />
    </div>
  );
};

export default Home;
