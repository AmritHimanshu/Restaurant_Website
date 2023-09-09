import React from 'react'
import confirmed from './pngwing.com.png'

function OrderConfirmed() {
  return (
    <div className="bg-blue bg-opacity-90 text-center w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] p-3 lg:p-10 space-y-5 flex flex-col items-center justify-center ">
      <div className="md:text-lg lg:text-xl text-white">Thank you for placing order.</div>
      <div className="w-[30px] md:w-[50px] lg:w-[100px] ">
        <img src={confirmed} alt="" />
      </div>
    </div>
  );
}

export default OrderConfirmed