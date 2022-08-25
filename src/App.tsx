import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import RequiredAuth from "./components/RequiredAuth";
import { authSelector } from "./features/authSlice";
import Landing from "./pages/Landing";

function App() {
  const auth = useAppSelector(authSelector);
  console.log(auth);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<RequiredAuth>Home</RequiredAuth>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
