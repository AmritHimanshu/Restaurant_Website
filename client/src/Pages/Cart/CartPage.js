import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {

  const navigate = useNavigate();

  const [addItem, setAddItem] = useState();

  useEffect(() => {

    window.scrollTo(0, 0);

    const items = JSON.parse(localStorage.getItem('items'));

    if (items && items.length > 0) {
      setAddItem(items);
    }
    else localStorage.clear();
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


  const handleQuantityChange = (id, action) => {
    const updatedItems = addItem.map(item => {
      if (item.id === id) {
        const updatedQuantity = action === 'increment' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(updatedQuantity, 0) };
      }
      return item;
    });

    setAddItem(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const deleteAllItems = () => {
    localStorage.clear();
    window.location.reload();
  }



  return (
    <div className="mt-20 md:mt-14 xl:mt-24">
      <div className="pt-[15px] lg:pt-[25px]">
        <h1 className="my-10 text-[20px] lg:text-[30px] text-center font-bold">Your Cart</h1>
        <div className="flex flex-col items-center justify-center flex-wrap space-y-5">

          {addItem ? addItem.map((item) => (
            <div
              key={item.id}
              className="px-5 py-4 bg-white flex flex-row justify-between w-[350px] md:w-[600px] xl:w-[800px] border-b-2"
            >

              <div className=''>
                <div className='my-2 w-[8px] lg:w-[17px]'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16XLUqGo6JYBGyBy4ustCnmorFcjO_acwvH_SPngT&s" alt="" />
                </div>
                <div className="text-[12px] lg:text-[16px]">
                  {item.title}
                </div>
                <div className="text-[15px] text-blue">₹{item.price}</div>
              </div>

              <div className='relative'>
                <img src={item.image} alt="" className="w-[50px] h-[40px] lg:w-[110px] lg:h-[100px] rounded-xl" />
                <div className="bg-blue bg-opacity-90 text-white font-bold flex items-center space-x-1 lg:space-x-3 rounded-md absolute -bottom-2 -left-[8px] lg:left-4 lg:-bottom-3">
                  <button
                    className="py-[5px] px-[10px] cursor-pointer"
                    onClick={() => handleQuantityChange(item.id, "decrement")}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="py-[5px] px-[10px] cursor-pointer"
                    onClick={() => handleQuantityChange(item.id, "increment")}
                  >
                    +
                  </button>
                </div>
              </div>

            </div>
          )) : <div className="text-xl text-gray-500">
            No items
          </div>}

        </div>

        {grandTotal > 0 && <div className="flex flex-col md:flex-row justify-between items-center my-[60px] space-y-5 md:space-y-0 md:w-[650px] m-auto">
          <p className="text-[15px] xl:text-[20px] text-center text-gray-500">
            Grand Total: ₹ {grandTotal}
          </p>

          <button className="py-2 xl:py-[10px] px-[20px] bg-blue text-white cursor-pointer text-[15px] font-[600] rounded-md duration-200 hover:bg-white hover:text-blue" onClick={() => {
            navigate("/checkout");
            window.location.reload();
          }}>
            Checkout
          </button>
        </div>}
      </div>

      <div className="text-center">
        {grandTotal > 0 && <button className="py-2 xl:py-[10px] px-[20px] mb-10 bg-blue bg-opacity-70 text-white cursor-pointer text-[15px] font-[600] rounded-md duration-200 hover:bg-white hover:text-blue" onClick={deleteAllItems}>
          Clear Cart
        </button>}
      </div>

    </div>
  );
};

export default CartPage;
