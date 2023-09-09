/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../Home.css";

const HealthyFood = ({icon, heading, desc}) => {
    return ( 
        <>
            <div className="bg-white p-5 w-[300px] xl:w-[400px] text-center space-y-3 xl:space-y-5 rounded-xl shadow-xl">
                <div className="text-blue text-[80px] flex justify-center">
                    {icon}
                </div>
                <h1 className='text-[23px] text-blue font-bold'>{heading}</h1>
                <p className='text-[16px] text-black'>{desc}</p>
            </div>
        </>
    )
}

export default HealthyFood;