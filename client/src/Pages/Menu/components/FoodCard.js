import React, { useState } from 'react';
import '../Menu.css'

const FoodCard = ({ id, image, title, price, func }) => {

  const [addItem, setAddItem] = useState({
    id: '',
    image: '',
    title: '',
    quantity: '',
    price: '',
  });

  const handleOnClick = (e) => {
    // Update the item with the new data
    const updatedItem = {
      id: id,
      image: image,
      title: title,
      quantity: 1,
      price: price,
    };

    setAddItem(updatedItem);

    // Wait for the state update to complete, and then proceed
    setTimeout(() => {

      // Retrieve the items from localStorage
      let items = localStorage.getItem('items');
      let itemsObj;

      if (items == null) itemsObj = [];
      else itemsObj = JSON.parse(items);

      // Push the updated item to the items list
      if (itemsObj.find(element => element.id === id) === undefined) {
        itemsObj.push(updatedItem);
        localStorage.setItem('items', JSON.stringify(itemsObj));
      }

      func(itemsObj.length);

    }, 0);

  }


  return (
    <div className="">
      <div
        className="px-5 py-3 bg-white flex flex-row justify-between w-[350px] md:w-[600px] xl:w-[800px] border-b-2"
      >
        <div className=''>
          <div className='my-2 w-[8px] lg:w-[17px]'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16XLUqGo6JYBGyBy4ustCnmorFcjO_acwvH_SPngT&s" alt="" />
          </div>
          <div className="text-[12px] lg:text-[16px]">
            {title}
          </div>
          <div className="text-[15px] text-blue">₹{price}</div>
        </div>
        <div className='relative'>
          <img src={image} alt="" className="w-[50px] h-[40px] lg:w-[110px] lg:h-[100px] rounded-xl" />
          <button
            className="bg-white text-blue text-[12px] py-[1px] px-3 lg:py-[5px] lg:px-[35px] cursor-pointer m-[5px] border-[1px] border-gray-300 rounded-md hover:scale-105 duration-300 absolute bottom-0 -left-[5px] lg:left-1 lg:-bottom-3"
            onClick={handleOnClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;