import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderConfirmed from "./OrderConfirmed";

function CardsTransaction() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  const mobileNumber = "xxxxxxxxx003";

  const navigate = useNavigate();
  const [status, setStatus] = useState(false);

  const [confirmedStatus, setConfirmedStatus] = useState(false);

  setTimeout(() => {
    navigate("/payment");
  }, [300000]);

  return (
    <div className="mt-40 px-10 pb-10 relative">
      <div
        className={`${
          status === true ? "bg-[#f6f6f6]" : "bg-white"
        } xl:w-[650px] m-auto px-5 pb-5 rounded-xl shadow-xl ${
          confirmedStatus === true ? "blur-sm" : "blur-none"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="w-[100px]">
            <img
              src="https://www.freepnglogos.com/uploads/sbi-logo-png/state-bank-india-logo-vector-3.png"
              alt=""
            />
          </div>
          <div className="w-[50px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png?20210817144358"
              alt=""
            />
          </div>
        </div>

        <div className="text-center">
          <div className="text-blue font-bold text-2xl pb-5">
            Purchase Authentication
          </div>
          <div className="text-[14px] leading-6 text-gray-600">
            We have send you a text message with a code to your registered
            mobile number ending with {mobileNumber}. You are paying merchant
            JAY BHARAT RESTAURANT the amount of ₹375.00 on Aug 8, 2023.
          </div>
        </div>

        <div className="mt-5 space-y-2 relative">
          <label htmlFor="code" className="text-lg text-gray-600">
            Enter your code below:
          </label>

          <div className="border-2 border-gray-400 p-2">
            <input
              type="text"
              id="code"
              className="outline-0 text-lg w-full placeholder:text-sm"
              placeholder="Enter code"
            />
          </div>

          <div
            className="mt-5 p-5 bg-blue text-center text-gray-200 font-bold rounded-md hover:text-white cursor-pointer"
            onClick={() => {
              setConfirmedStatus(true);
              setTimeout(() => {
                setConfirmedStatus(false);
                navigate("/order-track");
                window.location.reload();
              }, [2000]);
            }}
          >
            CONFIRM
          </div>

          <div className="flex items-center justify-between">
            <div className="mt-5 p-3 text-center bg-[#f6f6f6] text-blue font-bold rounded-md hover:bg-gray-200 cursor-pointer">
              RESEND
            </div>
            <div
              className="mt-5 p-3 text-center bg-[#f6f6f6] text-blue font-bold rounded-md hover:bg-gray-200 cursor-pointer"
              onClick={() => setStatus(!status)}
            >
              CANCEL
            </div>
          </div>

          <div className="py-2 text-[15px] text-gray-700">
            This page will automatically timeout after 300 seconds.
          </div>

          {status && (
            <div className="absolute top- bottom-0 p-5 text-start space-y-3 w-full rounded-xl bg-white shadow-xl">
              <div>Are you sure you want to cancel the payment?</div>
              <p>
                This payment request will get cancelled only if you have not
                completed the payment on UPI app.
              </p>
              <div
                className="py-[3px] px-[10px] xl:py-[10px] xl:px-[20px] bg-blue text-white text-center cursor-pointer text-[15px] xl:text-[18px] font-[600] rounded-xl duration-200 hover:bg-white hover:text-blue"
                onClick={() => {
                  navigate("/payment");
                  window.location.reload();
                }}
              >
                Yes, cancel
              </div>
              <div
                className="py-[3px] px-[10px] xl:py-[10px] xl:px-[20px] bg-[#f6f6f6] text-blue text-center cursor-pointer text-[18px] font-[600] hover:bg-gray-200 rounded-xl"
                onClick={() => setStatus(!status)}
              >
                No
              </div>
            </div>
          )}
        </div>
      </div>

      {confirmedStatus && (
        <div className="fixed z-10 left-[30%] md:left-[39%] lg:left-[40%] 2xl:left-[43%] top-[330px] lg:top-[250px] xl:top-[300px] [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] animate-bounce">
          <OrderConfirmed />
        </div>
      )}
    </div>
  );
}

export default CardsTransaction;
