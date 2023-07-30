import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRouter = ({ children }) => {
  const { user } = useSelector((state) => state.userData);

  return user?._id ? children : <Navigate to="/" />;
};

export default PrivateRouter;
