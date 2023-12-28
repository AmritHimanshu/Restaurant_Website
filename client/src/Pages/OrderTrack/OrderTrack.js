import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Header from "../Header/Header";

function OrderTrack() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [addItem, setAddItem] = useState();
  const [address, setAddress] = useState();

  const user = useSelector(selectUser);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));

    if (items) setAddItem(items);

    const selectedAddress = JSON.parse(localStorage.getItem('address'));
    setAddress(selectedAddress);

  }, [])

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
    <>
      <Header />
      <div className="mt-36 mb-10 px-10">
        <div className="space-y-16">
          <div className="xl:w-[800px] xl:h-[400px] m-auto overflow-hidden shadow-xl">
            <img
              src="https://images.mapsofworld.com/india/pune-map.jpg"
              alt=""
              className="w-full"
            />
          </div>

          <div className="p-5 xl:p-10 xl:w-[800px] m-auto bg-white rounded-xl shadow-xl">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:w-[60%]">
              <div className="xl:text-3xl text-blue font-bold">Order Details</div>
              <div className="text-center xl:text-start">
                <div className="text-sm text-gray-500">
                  <span className="mr-1 text-lg">Order </span>#174752233882
                </div>
                <div className="text-sm text-gray-500">07:47 PM</div>
              </div>
            </div>

            <div className="mt-5 flex flex-col lg:flex-row items-center justify-between space-y-10 xl:space-y-0">
              <div className="xl:w-[49%] space-y-6">
                <div className="space-y-1">
                  <div className="text-gray-500">FROM</div>
                  <div className="font-bold">dEMO RESTAURANT</div>
                  <div className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam, quibusdam!
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-gray-500">DELIVER TO</div>
                  <div className="font-bold">{user?.name}</div>
                  <div className="text-gray-500">
                    {address}
                  </div>
                </div>
              </div>

              <div className="xl:w-[45%]">
                <div>
                  <div className="text-gray-500">{addItem && addItem.length} ITEM</div>
                  {addItem && addItem.map((item, index) => (
                    (<div key={index} className="flex justify-between">
                      <div>
                        {item.title} x {item.quantity}
                      </div>
                      <div>₹ {item.price * item.quantity}</div>
                    </div>)
                  ))}
                </div>

                <div className="text-center">----------------------------------------------</div>

                <div className="flex justify-between">
                  <div className="font-bold">BILL TOTAL</div>
                  <div className="font-bold">₹ {grandTotal}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default OrderTrack;
