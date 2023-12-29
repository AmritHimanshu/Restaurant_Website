import React from 'react'
import { selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function SelectAddress() {
  
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  const handleOnNext = () => {
    var selectedAddress;
    var listAddress = document.getElementsByName('address');
    for (var i = 0; i < listAddress.length; i++){
      if (listAddress[i].checked) {
        selectedAddress = listAddress[i].value;
      }
    }
    let address = localStorage.getItem('address');
    address = selectedAddress;
    localStorage.setItem('address', JSON.stringify(address));
    
    if (selectedAddress) {
      navigate('/payment')
    }
    else window.alert('Select address to deliver');
  }

  return (
    <div className='flex items-center h-[100vh]'>
      <div className='my-5 w-[300px] md:w-[600px] m-auto flex flex-col items-center justify-center'>
        <div className='my-2 p-5 pb-2 w-[300px] md:w-[650px] md:text-[25px] text-blue border-b-[3px] font-bold'>
          Select Address
        </div>

        <div className='px-3 rounded-md md:w-[650px] shadow-md'>
          {user?.addresses.map(data => (
            <div key={data._id} className='p-5 md:p-7 border-b-2'>
              <input type="radio" id={data._id} name="address" value={data.address} autoComplete='false' className='mx-2' />
              <label htmlFor={data._id} className='p-2 md:p-7 text-[12px] md:text-[16px] font-bold'>{data.address}</label>
            </div>
          ))}
          <div className="my-5 p-3 bg-white text-center text-blue font-bold rounded-md duration-200 hover:bg-blue hover:text-white cursor-pointer" onClick={() => navigate("/add-delivery-address")}>Add New Address</div>
        </div>

        <div className='w-[300px] md:w-[650px] flex justify-between'>
          <div className="mt-5 py-2 px-3 md:py-3 md:px-6 bg-blue text-center text-white font-bold rounded-md duration-200 hover:bg-white hover:text-blue cursor-pointer" onClick={() => navigate("/")}>
            Cancel
          </div>

          <div className="mt-5 py-2 px-3 md:py-3 md:px-6 bg-blue text-center text-white font-bold rounded-md duration-200 hover:bg-white hover:text-blue cursor-pointer" onClick={handleOnNext}>
            Next
          </div>
        </div>

      </div>
    </div>
  )
}

export default SelectAddress