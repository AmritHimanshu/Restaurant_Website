import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodCard from "./components/FoodCard";
import infoCardDetails from "./components/MenuList"
import "../Menu/Menu.css";

const Menu2 = () => {

    const [cartLength, setCartLength] = useState();

    useEffect(() => {

        window.scrollTo(0, 0);

        const items = JSON.parse(localStorage.getItem('items'));

        if (items && items.length > 0) {
            setCartLength(items.length);
        }
    }, []);

    const dataLen = (data) => {
        setCartLength(data);
    }

    const [mealType, setMealType] = useState("Soup");

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
        <div id="menuPage" className="relative">
            <div className="menuHeading">
                <div className="my-10 text-[30px] text-center font-bold">Our Menu</div>
            </div>

            <div className="topSection">
                <div className="mealSelect">
                    <button value="Soup" className="mealButton mealActive" onClick={selectMealType} >Soup</button>
                    <button value="Mutton" className="mealButton" onClick={selectMealType} >Mutton</button>
                    <button value="Sea Food" className="mealButton" onClick={selectMealType}>Sea Food</button>
                    <button value="Noodles" className="mealButton" onClick={selectMealType}>Noodles</button>
                    <button value="Egg" className="mealButton" onClick={selectMealType}>Egg</button>
                    <button value="Veg. Dishes" className="mealButton" onClick={selectMealType}>Veg. Dishes</button>
                    <button value="Tandoor" className="mealButton" onClick={selectMealType}>Tandoor</button>
                </div>
            </div>

            <div className="mb-20 flex flex-col items-center space-y-5">
                {infoCardDetails.map((food, index) => {
                    if (food.type === mealType) {
                        return (
                            <FoodCard
                                key={index}
                                id={index}
                                image={food.image}
                                title={food.title}
                                price={food.price}
                                func={dataLen}
                            />
                        );
                    }
                })
                }
            </div>

            {cartLength > 0 && <div className="px-2 lg:px-5 py-2 md:py-2 bg-blue flex flex-row md:flex-row items-center justify-between w-[350px] md:w-[600px] xl:w-[600px] rounded-md fixed bottom-1 left-[6%] md:left-[14%] lg:left-[22%] xl:left-[30%] 2xl:left-[34%] shadow-xl"
            >
                <div className="text-[16px] text-white text-center">
                    {cartLength} items added
                </div>
                <Link to='/cart'>
                    <div className="text-[15px] xl:text-[18px] text-white p-2 cursor-pointer hover:scale-105 hover:font-bold duration-300">View Cart</div></Link>
            </div>}

        </div>
    )
};

export default Menu2