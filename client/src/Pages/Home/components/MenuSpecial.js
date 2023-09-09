/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../Home.css';

const MenuSpecial = ({image, title, desc}) => {
    return ( 
        <>
            <div className="bg-white p-5 w-[300px] xl:w-[400px] h-[300px] flex flex-col items-center space-y-10 rounded-xl shadow-xl">
                <div className="w-[100px] m-auto">
                    <img src={image} alt=""/>
                </div>
                <div className='text-[23px] text-blue font-bold'>{title}</div>
                <div className='tet-[16px] text-black'>{desc}</div>
            </div>

        </>
    )
}

export default MenuSpecial;