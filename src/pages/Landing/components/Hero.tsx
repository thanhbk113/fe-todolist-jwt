import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="items-center p-12 ml-4 sm:mt-32 lg:mt-0 md:ml-32 lg:ml-44 xl:ml-64 flex flex-col sm:flex-row justify-around">
      <div className="flex flex-col gap-y-2">
        <p className="text-purple-600 text-2xl">TO-DO</p>
        <p className="text-purple-300 text-2xl">LIST</p>
        <span className="text-blue-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>
        <div className="flex flex-col justify-center">
          <button
            onClick={() => navigate("/login")}
            className="mt-4 bg-yellow-300 rounded-md text-sm text-white hover:text-green-100 p-2 w-1/2"
          >
            LET'S GO
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <img className="w-3/4" src="images/landing.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
