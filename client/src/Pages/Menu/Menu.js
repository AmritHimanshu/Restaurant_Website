import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Header from "../Header/Header";
import FoodCard from "./components/FoodCard";
import "../Menu/Menu.css";

const Menu = () => {

    const user = useSelector(selectUser);

    const [cartLength, setCartLength] = useState();

    const dataLen = (data) => {
        setCartLength(data);
    }

    const [menu, setMenu] = useState();

    const getMenu = async () => {
        try {
            const res = await fetch('https://demo-restaurant-six.vercel.app/getMenu', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await res.json();
            setMenu(data);
            
        } catch (error) {
            // console.log(error);
        }
    }
    
    useEffect(() => {

        window.scrollTo(0, 0);

        getMenu();

        const items = JSON.parse(localStorage.getItem('items'));

        if (items && items.length > 0) {
            setCartLength(items.length);
        }
    }, []);


    const [mealType, setMealType] = useState("Noodles");

    const selectMealType = (ev) => {
        // set design
        const mealButton = document.getElementsByClassName("mealButton");
        for (var i = 0; i < mealButton.length; i++) {
            mealButton[i].classList.remove("mealActive");
        }
        ev.target.classList.add("mealActive");

        setMealType(ev.target.value);
    }

    return (
        <>
            <Header />
            <div id="menuPage" className="relative">
                <div className="menuHeading">
                    <div className="my-10 text-[30px] text-center font-bold">Our Menu</div>
                </div>

                <div className="topSection">
                    <div className="mealSelect">

                        {menu?.map((data, index) => (
                            <button key={index} value={data.category} className={`mealButton`} onClick={selectMealType} >{data.category}</button>
                        ))}

                        {/* <button value="Soup" className="mealButton mealActive" onClick={selectMealType} >Soup</button> */}
                    </div>
                </div>

                <div className="mb-20 flex flex-col items-center space-y-5">
                    {
                        menu?.map((food, index) => {
                            if (food.category === mealType) {
                                return food.items?.map((item) => (
                                    <FoodCard key={item._id} id={item._id} title={item.name} price={item.price} image={item.image} func={dataLen} />
                                ))
                            }
                        })
                    }
                </div>

                {user && cartLength > 0 && <div className="px-2 lg:px-5 py-2 md:py-2 bg-blue flex flex-row md:flex-row items-center justify-between w-[350px] md:w-[600px] xl:w-[600px] rounded-md fixed bottom-1 left-[6%] md:left-[14%] lg:left-[22%] xl:left-[30%] 2xl:left-[34%] shadow-xl"
                >
                    <div className="text-[16px] text-white text-center">
                        {cartLength} items added
                    </div>
                    <Link to={`/cart`}>
                        <div className="text-[15px] xl:text-[18px] text-white p-2 cursor-pointer hover:scale-105 hover:font-bold duration-300">View Cart</div></Link>
                </div>}

            </div>
        </>
    )
};

export default Menu