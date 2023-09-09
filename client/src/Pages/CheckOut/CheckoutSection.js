import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CheckoutSection = () => {

  const [addItem, setAddItem] = useState();

  useEffect(() => {

    window.scrollTo(0, 0);

    const items = JSON.parse(localStorage.getItem('items'));

    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].quantity === 0) {
          items.splice(i, 1);
          i--;
        }
      }
    }

    if (items) {
      setAddItem(items);
      localStorage.setItem('items', JSON.stringify(items));
    }

  }, []);

  const [grandTotal, setGrandTotal] = useState();

  useEffect(() => {
    let total = 0;

    {
      addItem && addItem.forEach((item) => {
        total += item.price * item.quantity;
      });
    }

    setGrandTotal(total);
  }, [addItem])

  return (
    <div className="pt-[15px] lg:pt-[25px] mt-20 md:mt-14 xl:mt-24">
      <h2 className="my-10 text-[20px] lg:text-[30px] text-center font-bold">CheckOut</h2>
      <div className="flex flex-col items-center justify-center flex-wrap space-y-5">
        {addItem && addItem.map((item) => (
          (
            <div
              key={item.id}
              className="px-5 py-4 bg-white flex flex-row justify-between w-[350px] md:w-[600px] xl:w-[800px] border-b-2"
            >

              <div className=''>
                <div className='my-2 w-[8px] lg:w-[17px]'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16XLUqGo6JYBGyBy4ustCnmorFcjO_acwvH_SPngT&s" alt="" />
                </div>
                <div className="text-[12px] lg:text-[16px]">
                  {item.title} x {item.quantity}
                </div>
                <div className="text-[15px] text-blue">₹{item.price}</div>
              </div>
              <img src={item.image} alt="" className="w-[50px] h-[40px] lg:w-[110px] lg:h-[100px] rounded-xl" />
            </div>)
        ))}

      </div>
      <div className="my-10 text-[28px] text-center">
        <p className="text-[15px] xl:text-[20px] text-center text-gray-800">
          Total : ₹{grandTotal}
        </p>
      </div>
      {grandTotal > 0 && <div className="flex flex-col md:flex-row justify-between items-center my-[60px] space-y-5 md:space-y-0 md:w-[650px] m-auto md:space-x-10">
        <Link to="/delivery-address">
          <button className="py-[10px] px-[20px] bg-blue text-white cursor-pointer text-[10px] xl:text-[15px] font-[600] rounded-md duration-200 hover:bg-white hover:text-blue">
            Proceed to Pay
          </button>
        </Link>
        <Link to="/">
          <button className="py-[10px] px-[20px] bg-blue text-white cursor-pointer text-[10px] xl:text-[15px] font-[600] rounded-md duration-200 hover:bg-white hover:text-blue">
            Will Do It Later
          </button>
        </Link>
      </div>}
    </div>
  );
};

export default CheckoutSection;
