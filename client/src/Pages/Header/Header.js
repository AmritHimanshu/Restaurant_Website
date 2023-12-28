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
            <span className="r">dEMO Restaurant</span>
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

            <li className="ml-5 w-[150px] flex items-center justify-between">
              {user && <NavLink
                to={`/cart`}
                className="header-icon nav-links hover:text-[30px] duration-300 text-white"
                title="my cart"
                onClick={handleClick}
              >
                <FaCartPlus/>
              </NavLink>}

              <NavLink
                to="/login"
                className="header-icon"
                onClick={handleClickAvatar}
              >
                {user ? <div className="px-3 py-1 bg-white text-blue hover:bg-indigo-500 hover:text-white duration-300 rounded-full" title="Log Out">{user.name[0]}</div> : <div className="nav-item bg-indigo-300 hover:bg-indigo-100 duration-300 text-blue text-lg px-2 rounded-lg">Log In</div>}
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
