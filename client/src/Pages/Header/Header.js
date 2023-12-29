/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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

  const [numberCart, setNumberCart] = useState();

  useEffect(() => {
    let items = localStorage.getItem('items');
    let itemObj = JSON.parse(items);
    setNumberCart(itemObj?.length);
  },[])

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
                className="header-icon nav-links text-white relative"
                onClick={handleClick}
              >
                <div className="px-1 text-sm text-white bg-red-500 rounded-full absolute top-0 right-0">{numberCart}</div>
                <FaCartPlus className="hover:scale-125 duration-300" title="my cart" />
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
