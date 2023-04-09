import React from "react";
import { removeUser } from "store/userSlice";
import { useDispatch } from "react-redux";

export const Header = ({ handleInputChange, email }) => {
  const dispatch = useDispatch();
  return (
    <header className="text-bg-dark fixed-top">
      <div className="headerContainer">
        <form role="search">
          <input
            type="search"
            className="form-control form-control-dark text-bg-dark"
            placeholder="Search..."
            aria-label="Search"
            onChange={handleInputChange}
          />
        </form>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(removeUser())}
        >
          Logout from {email}
        </button>
      </div>
    </header>
  );
};
