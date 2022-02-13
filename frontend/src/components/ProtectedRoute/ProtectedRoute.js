import React from "react";
import { Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
}

export default ProtectedRoute;
