import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { authSelector } from "../../features/authSlice";

interface Props {
  children: React.ReactNode;
}

const RequiredAuth: React.FC<Props> = ({ children }) => {
  const auth = useAppSelector(authSelector);
  const navigate = useNavigate();
  console.log(auth.user);
  useEffect(() => {
    if (!auth.user) {
      navigate("/landing");
    }
  }, [auth, navigate]);

  return <div>{children}</div>;
};

export default RequiredAuth;
