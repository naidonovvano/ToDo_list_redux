import React from "react";
import { Login } from "../elements/Login";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div>
      <h1>
        <span>Login</span>
      </h1>
      <Login />
      <p>
        Or <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};
