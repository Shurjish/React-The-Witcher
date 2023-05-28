import React from "react";
import "./Navigator.scss";
import { Link } from "react-router-dom";

const Navigator = ({ authenticated, logoutUser }) => {
  return (
    <nav>
      <ul>
        <li>
          <img
            src="https://www.playgwent.com/build/img/logo/logo-gwent-big-en-7c21928f.png"
            alt="logo"
          />
        </li>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cardSets">Cards</Link>
        </li>
        {authenticated ? (
          <li>
            <button onClick={logoutUser}>Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigator;
