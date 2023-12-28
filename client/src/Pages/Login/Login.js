/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from "../../features/userSlice";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import loginImg from "./assets/login.svg";

const Login = () => {

  const callLogOut = async () => {
    try {
      const res = await fetch('/logout', {
        method: 'GET',
        headers: {
          Accept: 'application/json', // For cookies
          'Content-Type': 'application/json'
        },
        credentials: 'include' // For tokens
      });

      const data = await res.json();

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    callLogOut();
  }, []);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) return window.alert("Fill all the fields");

    const res = await fetch('https://demo-restaurant-omega.vercel.app/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    });
    const data = await res.json();

    if (res.status === 400 || !data) window.alert(`${data.error}`);
    else if (res.status === 422) window.alert(`${data.error}`);
    else {
      window.alert("Signin successfully");
      dispatch(login(
        data
      ));
      navigate('/');
      window.location.reload();
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div className="my-[189px] lg:my-36 flex items-center m-auto">
          <div className="xl:w-[550px] hidden xl:block">
            <img src={loginImg} alt="" />
          </div>

          <div className="mt-1 w-[350px] sm:w-[500px] md:w-[650px] py-10 rounded-xl bg-blue bg-opacity-90">
            <div className="mb-10 text-white text-[30px] text-center font-bold">
              Login Form
            </div>

            <form method="POST" className="flex flex-col items-center justify-center space-y-5">
              <div className="flex flex-col space-y-2 w-[300px] sm:w-[400px] md:w-[600px]">
                <label htmlFor="email" className="text-white text-lg">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  className="px-2 sm:px-5 py-1 sm:py-2 text-black text-lg outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your Email"
                  autoComplete="false"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 w-[300px] sm:w-[400px] md:w-[600px]">
                <label htmlFor="password" className="text-white text-lg">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="pr-2 w-full flex items-center bg-white">
                  <input
                    className="px-2 sm:px-5 py-1 sm:py-2 w-full text-black text-lg outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                    type="text"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Your Password"
                    autoComplete="false"
                    required
                  />
                </div>
              </div>

              <button
                className="p-2 px-5 text-black rounded-lg text-lg hover:scale-105 duration-300"
                style={{
                  color: "#003366",
                  fontWeight: "500",
                  backgroundColor: "white",
                }}
                type="submit"
                onClick={loginUser}
              >
                Login
              </button>

              <div className="flex space-x-2">
                <div className="text-white">Don't have an account?</div>
                <Link to="/register">
                  <div className="text-yellow-200 cursor-pointer hover:text-[yellow]">
                    Register now
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Login;
