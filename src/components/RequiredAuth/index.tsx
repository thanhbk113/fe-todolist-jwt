import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { authSelector } from "../../features/authSlice";

interface Props {
  children: React.ReactNode;
}

const RequiredAuth: React.FC<Props> = ({ children }) => {
  const auth = useAppSelector(authSelector);

  if (!auth) {
    return <Navigate to="/landing" />;
  }

  return <div>{children}</div>;
};

export default RequiredAuth;
