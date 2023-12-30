import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingIcon from '../Loading/loading.png';

function Address() {
  const [houseNumber, setHouseNumber] = useState('');
  const [apartment, setApartment] = useState('');
  const [pincode, setPincode] = useState('');
  const [landmark, setLandmark] = useState('');
  const [directions, setDirections] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('https://demo-restaurant-omega.vercel.app/address', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // Include cookies in the request
      body: JSON.stringify({
        houseNumber, apartment, pincode, landmark, directions
      })
    });

    const data = await res.json();

    if (res.status !== 200 || !data) {
      alert(`${data.error}`);
    }
    else {
      // alert(`${data.message}`);
      const addAddress = houseNumber + ', ' + apartment + ', ' + landmark + ', ' + directions + ', ' + 'pincode - ' + pincode;

      let address = localStorage.getItem('address');
      address = addAddress;
      localStorage.setItem('address', JSON.stringify(address));

      setLoading(false);
      navigate("/payment");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      {loading && <div className="h-[100vh] flex items-center justify-center">
        <img src={LoadingIcon} alt="" className="w-[50px] animate-bounce" />
      </div>}

      {!loading && <div className="my-24 w-[350px] md:w-[650px] m-auto p-5 xl:p-10 bg-white rounded-xl shadow-xl">
        <h2 className="text-blue font-bold text-2xl pb-5">
          Delivery Address
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-[15px] space-y-2">
            <label htmlFor="houserNumber" className="text-lg text-gray-600">
              House/Flat/Block No. <span className="text-[red]">*</span>
            </label>
            <input
              type="text"
              id="houserNumber"
              name="houserNumber"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              required
              className="outline-0 p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm"
            />
          </div>
          <div className="mb-[15px] space-y-2">
            <label htmlFor="apartment" className="text-lg text-gray-600">
              Apartment/Road/Area <span className="text-[red]">*</span>
            </label>
            <input
              type="text"
              id="apartment"
              name="apartment"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
              required
              className="outline-0 p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm"
            />
          </div>
          <div className="mb-[15px] space-y-2">
            <label htmlFor="pincode" className="text-lg text-gray-600">
              Pincode <span className="text-[red]">*</span>
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}

              className="outline-0 p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm"
            />
          </div>
          <div className="mb-[15px] space-y-2">
            <label htmlFor="landmark" className="text-lg text-gray-600">Lankmark (optional)</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="outline-0 p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm"
            />
          </div>
          <div className="mb-[15px] space-y-2">
            <label htmlFor="directions" className="text-lg text-gray-600">
              Directions to Reach (optional)
            </label>
            <textarea
              id="directions"
              name="directions"
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
              className="outline-0 w-full p-2 text-lg w-full border-2 border-gray-600 placeholder:text-sm resize-none rounded-none"
            />
          </div>
          <div className='flex items-center justify-between'>
            <div
              className="mt-5 p-3 bg-blue text-center text-gray-200 font-bold rounded-md duration-200 hover:bg-white hover:text-blue cursor-pointer"
              onClick={() => { navigate('/delivery-address'); }}
            >
              Cancel
            </div>

            <button
              type="submit"
              className="mt-5 p-3 bg-blue text-center text-gray-200 font-bold rounded-md duration-200 hover:bg-white hover:text-blue cursor-pointer"
            >
              Deliver Here
            </button>
          </div>
        </form>
      </div>}
    </>
  );
}

export default Address;
