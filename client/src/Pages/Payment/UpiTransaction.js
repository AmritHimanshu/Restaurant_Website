import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import OrderConfirmed from "./OrderConfirmed";

function UpiTransaction() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const navigate = useNavigate();
  const [status, setStatus] = useState(false);

  const [confirmedStatus, setConfirmedStatus] = useState(false);

  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1);

      if (seconds === 0) {
        if (minutes === 0) clearInterval(interval);
        else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    if (seconds <= 0 && minutes <= 0) {
      setTimeout(() => {
        navigate("/payment");
      }, [3000]);
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div className="mt-36 px-10 relative">
      <div
        className={`${status === true ? "bg-[#f6f6f6]" : "bg-white"
          } p-5 mb-16 xl:w-[1000px] m-auto flex flex-col justify-between rounded-xl shadow-xl ${confirmedStatus === true ? "blur-sm" : "blur-none"
          }`}
      >
        <div>
          <div className="flex items-center space-x-5">
            {/* <BsArrowLeft
              style={{ fontSize: "30px", marginRight: "10px" }}
              title="back"
              className="cursor-pointer"
              onClick={() => setStatus(!status)}
            /> */}
            <div className="text-sm xl:text-xl">PAYMENT DETAILS</div>
          </div>

          <div className="space-y-10 flex flex-col items-center ">
            <div className="mt-10 w-[400px] h-[200px] flex items-center justify-center">
              {seconds > 0 || minutes > 0 ? (
                <div className="text-blue text-3xl font-bold">
                  {minutes < 10 ? `0${minutes}` : minutes} :{" "}
                  {seconds < 10 ? `0${seconds}` : seconds}
                </div>
              ) : (
                <p className="text-blue text-[15px] xl:text-3xl font-bold">
                  Request is not approved
                </p>
              )}
            </div>

            <div className="text-[12px] text-center xl:text-xl">
              Open your UPI app to approve the payment request before your timer
              runs out.
            </div>
          </div>
        </div>

        <div className="text-center relative py-5">
          <div className="flex items-center justify-center my-5">
            <span className="font-bold mr-2">Note: </span>
            <p className="text-[9px] xl:text-[12px]">
              Do not hit the back button or close this screen until the
              transaction is complete.
            </p>
          </div>
          <button
            className="py-[3px] px-[10px] xl:py-[10px] xl:px-[20px] bg-blue text-white cursor-pointer text-[15px] xl:text-[18px] font-[600] rounded-xl duration-200 hover:bg-white hover:text-blue"
            onClick={() => setStatus(!status)}
          >
            Cancel Payment
          </button>

          {status && (
            <div className="absolute -top-16 p-5 text-start space-y-3 w-full rounded-xl bg-white shadow-xl">
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
        <div className="absolute z-10 left-[20%] md:left-[34%] lg:left-[40%] top-[150px] [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] animate-bounce">
          <OrderConfirmed />
        </div>
      )}
    </div>
  );
}

export default UpiTransaction;
