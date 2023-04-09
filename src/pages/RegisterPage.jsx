import React from "react";
import { Signup } from "elements/Signup";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div>
      <h1>
        <span>Sign up</span>
      </h1>
      <Signup />
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
