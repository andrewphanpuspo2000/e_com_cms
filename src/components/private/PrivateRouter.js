import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRouter = ({ children }) => {
  const { user } = useSelector((state) => state.userData);
  const location = useLocation();
  console.log(location);
  return user?._id ? (
    children
  ) : (
    <Navigate to="/" state={{ from: { location } }} />
  );
};

export default PrivateRouter;
