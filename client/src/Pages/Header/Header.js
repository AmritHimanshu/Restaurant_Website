/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";

import "./Header.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <span className="r">Jay Bharat Restaurant</span>
          </Link>

          <ul
            className={click ? "nav-menu active" : "nav-menu"}
            style={{ alignItems: "center" }}
          >
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                end
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/menu"
                className="nav-links"
                onClick={handleClick}
              >
                Menu
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/gallery"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>

            <li className="header-icon-li flex">
              <NavLink
                to="/cart"
                className="header-icon relative"
                onClick={handleClick}
              >
                <FaCartPlus />
              </NavLink>

              <NavLink
                to="/login"
                className="header-icon"
                onClick={handleClick}
              >
                <BiSolidUserCircle />
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <AiOutlineCloseCircle /> : <FaHamburger />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
