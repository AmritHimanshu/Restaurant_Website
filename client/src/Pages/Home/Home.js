import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHotMeal } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { AiOutlineCoffee } from "react-icons/ai";

import BookTable from "./components/BookTable";
import Card from "./components/Card";
import HealthyFood from "./components/HealthyFood";
import MenuSpecial from "./components/MenuSpecial";

import BgImage from "./assets/bg-img.jpeg";
import Menu1 from "./assets/m1.webp";
import Menu2 from "./assets/m2.webp";
import Menu3 from "./assets/m3.webp";
import Menu4 from "./assets/m4.webp";
import a1 from "./assets/a1.jpg";
import a2 from "./assets/a2.png";
import a3 from "./assets/a3.jpg";
import a4 from "./assets/a4.jpg";
import Footer from "../Footer/Footer";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const infoCardDetails = [
    {
      image: Menu1,
      title: "Sandwich",
      desc: "Making a resvation at delicious restaurant is easy and Order now",
    },
    {
      image: Menu3,
      title: "Hamburger",
      desc: "Making a resvation at delicious restaurant is easy and Order now",
    },
    {
      image: Menu2,
      title: "Sandwich",
      desc: "Making a resvation at delicious restaurant is easy and Order now",
    },
    {
      image: Menu4,
      title: "Hamburger",
      desc: "Making a resvation at delicious restaurant is easy and Order now",
    },
    {
      image: Menu3,
      title: "Sandwich",
      desc: "Making a resvation at delicious restaurant is easy and Order now",
    },
    {
      image: Menu2,
      title: "Hamburger",
      desc: "Making a resvation at delicious restaurant is easy and Order now",
    },
    {
      image: Menu1,
      title: "Sandwich",
      desc: "Making a resvation at delicious restaurant is easy and Order now",
    },
  ];

  const healthyFoodDetails = [
    {
      icon: <GiHotMeal />,
      heading: "Healthy Meal",
      desc: "Making a reservation at delicious restaurant is easy and takes just a couple of mintutes.",
    },
    {
      icon: <GiNoodles />,
      heading: "Fast Food",
      desc: "Making a reservation at delicious restaurant is easy and takes just a couple of mintutes.",
    },
    {
      icon: <AiOutlineCoffee />,
      heading: "Delicious Coffee",
      desc: "Making a reservation at delicious restaurant is easy and takes just a couple of mintutes.",
    },
  ];

  const menuSpecialDetails = [
    {
      image: a1,
      title: "Pure Ingredients",
      desc: "Find all ingredients pure and fresh",
    },
    {
      image: a2,
      title: "Sustainability",
      desc: "Deliveprofessional and personalized",
    },
    {
      image: a3,
      title: "Environmentalism",
      desc: "Integrated multi-asset class analytics.",
    },
    {
      image: a4,
      title: "Formula Transparency",
      desc: "Unique food, and standard",
    },
  ];

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="h-full">
        <div className="h-[100vh] px-10 xl:w-[52%] flex flex-col justify-center bg-[url(https://w0.peakpx.com/wallpaper/176/588/HD-wallpaper-indian-food-breakfast-healthy.jpg)] lg:bg-none bg-auto sm:bg-cover bg-no-repeat bg-top lg:bg-left">
          <div className="space-y-10 text-center">
            <div className="text-[30px] xl:text-[45px] text-center text-white lg:text-black font-bold">
              Your Favourite Food Delivered Hot & Fresh 
            </div>
            <p className="text-white lg:text-gray-700 text-[14px] sm:text-[20px] 2xl:text-[30px] p-5 bg-black lg:bg-[#f6f6f6] bg-opacity-60 rounded-xl">
              Healthy switcher chefs do all the prep work, like peeding,
              chopping & marinating, so you can cook a fresh food.
            </p>
            <div
              className="mt-5 p-3 xl:p-5 w-[150px] xl:w-[200px] m-auto bg-blue bg-[#CC0066 text-xl text-center text-gray-200 font-bold rounded-xl hover:bg-white hover:text-blue duration-300 cursor-pointer"
              onClick={() => navigate("/menu")}
            >
              Order Now
            </div>
          </div>
        </div>

        <div className="bg-[#f6f6f6] bg-opacity-80 p-5 xl:p-10 space-y-10 xl:space-y-20">
          <div className="text-[20px] sm:text-[25px] xl:text-[40px] 2xl:w-[50%] m-auto font-bold text-center">
            Making a reservation at Delicious restaurant is easy and takes just
            a couple of minutes.
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-between space-y-10 xl:space-y-0 2xl:w-[60%] m-auto">
            <div className="xl:w-[40%] space-y-3 text-center xl:text-start">
              <div className="text-lg sm:text-xl xl:text-2xl font-bold">Book a Table</div>
              <p className="text-sm text-gray-500">
                etiam dignissim diam quis enim lobortis scelerisque fermentum
                dui faucibus in ornare quam viverra orci sagittis eu volutpat
                odio facilisis mauris sit amet massa vitae tortor condimentum
                lacinia quis vel eros donec ac odio tempor orci dapibus ultrices
                in iaculis nunc sed augue lacus viverra vitae congue eu
                consequat ac
              </p>
            </div>
            <div>
              <BookTable />
            </div>
          </div>
        </div>

        <div className="py-5 xl:py-10 bg-[#ffa39b] bg-opacity-0 space-y-5 xl:space-y-10">
          <div className="text-[25px] xl:text-[40px] font-bold text-center">Our Specials</div>
          <div className="flex items-center justify-center w-[100%] xl:py-[50px] xl:px-[20px] overflow-hidden">
            {infoCardDetails.map((card, index) => {
              return (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  desc={card.desc}
                />
              );
            })}
          </div>
        </div>

        <div className="bg-[#f6f6f6] bg-opacity-80 p-10 xl:p-20 space-y-6 xl:space-y-10">
          <div className="text-[28px] xl:text-[40px] text-center">
            Best way to eat healthy food
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10 max-w-max m-auto">
            {healthyFoodDetails.map((healthyFood, index) => {
              return (
                <HealthyFood
                  key={index}
                  icon={healthyFood.icon}
                  heading={healthyFood.heading}
                  desc={healthyFood.desc}
                />
              );
            })}
          </div>
        </div>

        <div className="xl:p-10 h-[200px] xl:h-[400px] bg-[#ffa39b] bg-opacity-40 flex items-center justify-center">
          <div className="text-[30px] xl:text-[50px] font-bold text-center tracking-wider">Upgrade To The Latest Taste!</div>
        </div>

        <div className="bg-[#f6f6f6] bg-opacity-80 p-10 xl:p-20 space-y-10">
          <div className="text-[25px] xl:text-[40px] text-center">
            What Makes Our Menus Special
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10 max-w-max m-auto">
            {menuSpecialDetails.map((menuSpecial, index) => {
              return (
                <MenuSpecial
                  key={index}
                  image={menuSpecial.image}
                  title={menuSpecial.title}
                  desc={menuSpecial.desc}
                />
              );
            })}
          </div>
        </div>

        <div className="p-4 xl:p-10 md:h-[200px] xl:h-[400px] bg-[#ffa39b] bg-opacity-40 flex items-center justify-center">
          <div className="text-[25px] xl:text-[50px] font-bold text-center tracking-wider">Where every flavor tells a story, for the love of delicious food.</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
