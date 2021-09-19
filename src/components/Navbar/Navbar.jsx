import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navWrapper">
      <ul className="navUL">
        <li>
          <Link to="/" className="faMoon">
            <FontAwesomeIcon icon={faMoon} />
          </Link>
        </li>
        <li>
          <Link to="/movies" className="navLink">
            Find movie
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
