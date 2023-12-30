import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Header from "../Header/Header";
import FoodCard from "./components/FoodCard";
import LoadingIcon from "../Loading/loading.png";
import "../Menu/Menu.css";

const Menu = () => {

    const user = useSelector(selectUser);

    const [cartLength, setCartLength] = useState();

    const [loading, setLoading] = useState(false);

    const dataLen = (data) => {
        setCartLength(data);
    }

    const [menu, setMenu] = useState();

    const getMenu = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://demo-restaurant-omega.vercel.app/getMenu', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await res.json();
            setMenu(data);
            setLoading(false);

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
        <>
            <Header />
            <div id="menuPage" className="relative">
                <div className="menuHeading">
                    <div className="my-5 lg:my-10 text-[20px] lg:text-[30px] text-center text-neutral-600">----- Select Category -----</div>
                </div>

                {loading && <div className="h-[50vh] flex items-center justify-center">
                    <img src={LoadingIcon} alt="" className="w-[50px] animate-bounce" />
                </div>}

                {!loading && <div>
                    <div className="w-[360px] lg:w-[1024px] lg:w-aut flex items-center justify-center mx-auto overflow-x-scroll lg:overflow-x-hidden rounded-xl shadow-[0px_8px_20px_-15px_rgba(0,0,0,0.5)] topSection">
                        <div className="w-aut w-[1024px] ml-48 lg:ml-0 flex items-center justify-center rounded-xl  mealSelect">

                            {menu?.map((data, index) => (
                                <div key={index} className="px-5 flex items-center lg:border-x-2">
                                    <img src={data.image} alt="" className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] rounded-full" />
                                    <button key={index} value={data.category} className="text-[16px] lg:text-[18px] min-w-max mealButton" onClick={selectMealType} >{data.category}</button>
                                </div>
                            ))}

                            {/* <button value="Soup" className="mealButton mealActive" onClick={selectMealType} >Soup</button> */}
                        </div>
                    </div>

                    <div className="mt-10 lg:mt-20 mb-20 flex flex-col items-center space-y-5">
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
                </div>}

            </div>
        </>
    )
};

export default Menu