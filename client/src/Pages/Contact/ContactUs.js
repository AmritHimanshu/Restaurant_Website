/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Form = () => {

  const [userData, setUserData] = useState({ name: '', email: '', phone: '', message: '' });

  const getData = async () => {
    try {
      const res = await fetch('https://demo-restaurant-omega.vercel.app/getData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      });

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
      else {
        const data = await res.json();
        setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });
      }

    } catch (error) {
      // console.log(error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    })

    const data = await res.json();
    if (res.status !== 200 || !data) {
      alert(`${data.error}`);
      setUserData({ ...userData, message: '' });
    }
    else {
      alert(`${data.message}`);
      setUserData({ ...userData, message: '' });
    }
  };

  return (
    <>
      <Header />
      <div className="">
        <div className="mt-40 mb-20 w-[350px] sm:w-[700px] lg:w-[800px] xl:w-[1050px] m-auto p-5 lg:p-16 xl:p-10 bg-white rounded-xl shadow-xl">
          <h2 className="text-blue font-bold text-2xl pb-5 text-center">Contact Us</h2>
          <div className="flex flex-col xl:flex-row items-center justify-between">
            <div>
              <img
                src="https://cdn.dribbble.com/users/1484145/screenshots/14190807/media/2ddaa3247796d79157a19993ad960066.png?compress=1&resize=400x300&vertical=center"
                alt=""
                className="w-[500px]"
              />
            </div>

            <div>
              <form method="POST" onSubmit={handleSubmit}>
                <div className="mb-[15px] space-y-2">
                  <label htmlFor="name" className="text-lg text-gray-600">
                    Full Name <span className="text-[red]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userData?.name}
                    onChange={handleInputs}
                    required
                    autoComplete='false'
                    className="outline-0 p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm"
                  />
                </div>
                <div className="mb-[15px] space-y-2">
                  <label htmlFor="email" className="text-lg text-gray-600">
                    Email Id <span className="text-[red]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData?.email}
                    onChange={handleInputs}
                    required
                    autoComplete='false'
                    className="outline-0 p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm"
                  />
                </div>
                <div className="mb-[15px] space-y-2">
                  <label htmlFor="phone" className="text-lg text-gray-600">
                    Phone Number <span className="text-[red]">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={userData?.phone}
                    onChange={handleInputs}
                    required
                    autoComplete='false'
                    className="outline-0 p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm"
                  />
                </div>
                <div className="mb-[15px] space-y-2">
                  <label htmlFor="message" className="text-lg text-gray-600">
                    Message <span className="text-[red]">*</span>
                  </label>
                  <textarea
                    value={userData?.message}
                    id="message"
                    name="message"
                    onChange={handleInputs}
                    required
                    autoComplete='false'
                    className="outline-0 w-full p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm resize-none rounded-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-5 p-2 px-5 bg-blue text-center text-lg text-gray-200 font-bold rounded-md hover:text-white cursor-pointer"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* <section className="my-20 w-[350px] sm:w-[750px] lg:w-[900px] xl:w-[1050px] 2xl:w-[1700px] m-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7505191.250260705!2d72.14717736929796!3d23.292375867405138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398da934d2d9da5b%3A0x6119226bcfec4bad!2sHOTEL%20YASH!5e0!3m2!1sen!2sin!4v1688574970960!5m2!1sen!2sin"
          width={"100%"}
          height={"350"}
          allowfullscreen=""
          title="contact"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
          {" "}
        </iframe>
      </section> */}

        <Footer />
      </div>
    </>
  );
};

export default Form;
