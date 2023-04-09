import React, { useState } from "react";

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <div className="input-group mb-3 formContainer">
        <input
          className="form-control formInput"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => setEmail("")}
        >
          X
        </button>
      </div>
      <div className="input-group mb-3 formContainer">
        <input
          className="form-control formInput"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
          aria-label="Recipient's password"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => setPass("")}
        >
          X
        </button>
      </div>
      <div className="buttonContainer">
        <button
          className="btn btn-primary"
          onClick={() => handleClick(email, pass)}
        >
          {title}
        </button>
      </div>
    </div>
  );
};
