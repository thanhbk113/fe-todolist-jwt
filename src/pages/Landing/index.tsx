import React from "react";
import Hero from "./components/Hero";
import Taskbar from "./components/Taskbar";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <Taskbar />
      <Hero />
    </div>
  );
};

export default Landing;
