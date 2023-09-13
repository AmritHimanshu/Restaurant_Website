/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import registerImg from "./assets/login.svg";

const Register = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '', email: '', phone: '', password: '', cpassword: ''
  });

  const handleInputs = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    if (!name || !email || !phone || !password || !cpassword) {
      return window.alert("Fill all the fields");
    }

    if (password !== cpassword) return window.alert("Password and Confirm Password not matched");

    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, phone, password, cpassword
      })
    })

    const data = await res.json();
    
    if (res.status === 422 || !data) window.alert(`${data.error}`);
    else {
      window.alert(`${data.message}`);
      navigate('/login');
      window.location.reload();
    }
  }

  return (
    <div className="flex flex-col">
      <div className="my-[100px] lg:my-36 flex items-center m-auto">
        <div className="xl:w-[550px] hidden xl:block">
          <img src={registerImg} alt="" />
        </div>

        <div className="my-10 xl:my-10 w-[350px] sm:w-[500px] md:w-[650px] py-10 rounded-xl bg-blue bg-opacity-90">
          <div className="mb-10 text-white text-[30px] text-center font-bold">
            Registration Form
          </div>

          <form method="POST" className="flex flex-col items-center justify-center space-y-5">
            <div className="flex flex-col space-y-2 w-[300px] sm:w-[400px] md:w-[600px]">
              <label className="text-white text-lg">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                className="px-2 sm:px-5 py-1 sm:py-2 text-black text-lg  outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputs}
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="flex flex-col space-y-2 w-[300px] sm:w-[400px] md:w-[600px]">
              <label className="text-white text-lg">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="px-2 sm:px-5 py-1 sm:py-2 text-black text-lg  outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputs}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="flex flex-col space-y-2 w-[300px] sm:w-[400px] md:w-[600px]">
              <label className="text-white text-lg">
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                className="px-2 sm:px-5 py-1 sm:py-2 text-black text-lg  outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                type="tel"
                pattern="[7-9]{1}[0-9]{9}"
                name="phone"
                value={user.phone}
                onChange={handleInputs}
                placeholder="Your Mobile Number"
                required
              />
            </div>

            <div className="flex flex-col space-y-2 w-[300px] sm:w-[400px] md:w-[600px]">
              <label className="text-white text-lg">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="pr-2 w-full flex items-center bg-white ">
                <input
                  className="px-2 sm:px-5 py-1 sm:py-2 w-full text-black text-lg  outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                  type="text"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Your Password"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2 w-[300px] sm:w-[400px] md:w-[600px]">
              <label className="text-white text-lg">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                className="px-2 sm:px-5 py-1 sm:py-2 text-black text-lg  outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm"
                type="password"
                name="cpassword"
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="Your Confirm Password"
                required
              />
            </div>

            <button
              className="p-2 px-5 text-black rounded-lg text-lg hover:scale-105 duration-300"
              style={{
                color: "#003366",
                fontWeight: "500",
                backgroundColor: "white",
              }}
              type="submit"
              onClick={postData}
            >
              Register
            </button>

            <div className="flex space-x-2">
              <div className="text-white">Already have an account?</div>
              <Link to="/login">
                <div className="text-yellow-200 cursor-pointer hover:text-[yellow]">
                  Login
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
