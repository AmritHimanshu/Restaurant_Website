import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Address() {
  const [houseNumber, setHouseNumber] = useState('');
  const [apartment, setApartment] = useState('');
  const [pincode, setPincode] = useState('');
  const [landmark, setLandmark] = useState('');
  const [directions, setDirections] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <div className="my-40 w-[350px] md:w-[650px] m-auto p-5 xl:p-10 bg-white rounded-xl shadow-xl">
      <h2 className="text-blue font-bold text-2xl pb-5">
        Delivery Address
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-[15px] space-y-2">
          <label className="text-lg text-gray-600">
            House/Flat/Block No. <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
            require
            className="outline-0 p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm"
          />
        </div>
        <div className="mb-[15px] space-y-2">
          <label className="text-lg text-gray-600">
            Apartment/Road/Area <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
            require
            className="outline-0 p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm"
          />
        </div>
        <div className="mb-[15px] space-y-2">
          <label className="text-lg text-gray-600">
            Pincode <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            require
            className="outline-0 p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm"
          />
        </div>
        <div className="mb-[15px] space-y-2">
          <label className="text-lg text-gray-600">Lankmark (optional)</label>
          <input
            type="text"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            className="outline-0 p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm"
          />
        </div>
        <div className="mb-[15px] space-y-2">
          <label className="text-lg text-gray-600">
            Directions to Reach (optional)
          </label>
          <textarea
            value={directions}
            onChange={(e) => setDirections(e.target.value)}
            className="outline-0 w-full p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm resize-none rounded-none"
          />
        </div>
        <button
          type="submit"
          className="mt-5 p-3 bg-blue text-center text-gray-200 font-bold rounded-md hover:text-white cursor-pointer"
        >
          Deliver Here
        </button>
      </form>
    </div>
  );
}

export default Address;
