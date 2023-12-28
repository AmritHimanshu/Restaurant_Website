import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import '../Menu.css'

const FoodCard = ({ id, title, price, image, func }) => {

  const user = useSelector(selectUser);

  const [text, setText] = useState("Add");

  const handleOnClick = (e) => {

    if (!user) {
      window.alert("Login First");
      return;
    }

    // Update the item with the new data
    const updatedItem = {
      id: id,
      image: image,
      title: title,
      quantity: 1,
      price: price,
    };

    // Wait for the state update to complete, and then proceed
    setTimeout(() => {
      // Retrieve the items from localStorage
      let items = localStorage.getItem('items');
      let itemsObj;
      if (items == null) itemsObj = [];
      else itemsObj = JSON.parse(items);
      // Push the updated item to the items list
      if (itemsObj.find(element => element.title === title) === undefined) {
        itemsObj.push(updatedItem);
        localStorage.setItem('items', JSON.stringify(itemsObj));
        setText("Added");
      }
      func(itemsObj.length);
    }, 0);

  }

  useEffect(() => {
    let items = localStorage.getItem('items');
    let itemObj = JSON.parse(items);
    if (itemObj?.find(element => element.title === title) !== undefined) {
      setText("Added");
    }
  },[])

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
            className="bg-white text-blue text-[12px] py-[1px] px-3 lg:py-[5px] cursor-pointer my-[5px] border-[1px] border-gray-300 rounded-md hover:scale-105 duration-300 absolute bottom-0 w-[100px] -left-[5px] lg:left-1 lg:-bottom-3"
            onClick={handleOnClick}
          >
            {text}
            {/* Add */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;