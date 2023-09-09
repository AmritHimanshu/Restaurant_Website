/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Card = ({ image, title, desc }) => {
    return (
        <div className="bg-white min-w-[300px] ml-[50px] p-[20px] text-center space-y-10 rounded-xl animate-slide cursor-default">
            <div className="h-[150px] max-w-[100%] object-contain">
                <img src={image} alt="" className='h-[150px] max-w-[100%] m-auto' />
            </div>
            <div className='text-[23px] text-blue font-bold'>{title}</div>
            <div className='text-[16px] text-black'>{desc}</div>
        </div>
    )
}

export default Card;