/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { NavLink, Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";

import "./Header.css";

function NavBar() {

  const dispatch = useDispatch();

  const [click, setClick] = useState(false);

  const user = useSelector(selectUser);

  const handleClick = () => setClick(!click);

  const handleClickAvatar = () => {
    setClick(!click);
    dispatch(logout());
  }

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
                to="/contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>

            <li className="header-icon-li flex items-center">
              <NavLink
                to="/cart"
                className="header-icon"
                onClick={handleClick}
              >
                <FaCartPlus />
              </NavLink>

              <NavLink
                to="/login"
                className="header-icon"
                onClick={handleClickAvatar}
              >
                {user ? <div className="px-3 py-1 ml-5 bg-indigo-300 text-blue rounded-full" title="Log Out">{user.name[0]}</div> : <div className="nav-item bg-indigo-300 text-blue text-lg px-2 ml-5 rounded-lg">Log In</div>}
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
