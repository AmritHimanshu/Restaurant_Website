import React, { useEffect } from "react";
import { useState } from "react";
import { BsBank2 } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  const upi = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 65 65"
      viewBox="0 0 65 65"
      id="bhim-upi"
    >
      <polygon
        fill="#fad1c4"
        stroke="#003366"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        points="38.3 5.5 23.1 60.7 51.9 32.4"
      ></polygon>
      <polygon
        fill="#fff"
        stroke="#003366"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        points="28.1 4.1 13.1 60.9 42.2 32.8"
      ></polygon>
    </svg>
  );

  const navigate = useNavigate();

  const [activeName, setActiveName] = useState("UPI");

  const handleOnClick = (e) => {
    setActiveName(e.target.innerText);
  };

  return (
    <div className="mt-20 md:mt-14 xl:mt-12 py-10">
      <div className="mt-5 xl:my-20 px-5 py-10 xl:px-10 bg-white w-[340px] md:w-[700px] xl:w-[1000px] m-auto rounded-2xl shadow-xl">
        <div className="text-lg font-bold pb-10">Choose payment method</div>

        <div className="flex flex-col xl:flex-row">
          <div className="xl:pl-5 py-5 m-auto xl:mt-0 bg-blue text-gray-200 font-bold w-[300px] md:w-[340px] h-[250px] flex flex-col justify-center">
            <div
              className={`py-5 pl-5 text-lg flex items-center cursor-pointer ${
                activeName === "UPI" && "bg-white"
              } ${activeName === "UPI" && "text-blue"}`}
              onClick={handleOnClick}
            >
              <div className="w-[30px]">{upi}</div>
              UPI
            </div>

            {/* <div
            className={`py-5 pl-5 text-lg flex items-center cursor-pointer ${
              activeName === "Netbanking" && "bg-white"
            } ${activeName === "Netbanking" && "text-blue"}`}
            onClick={handleOnClick}
          >
            <BsBank2 style={{ fontSize: "20px", marginRight: "10px" }} />
            Netbanking
          </div> */}

            <div
              className={`py-5 pl-5 text-lg flex items-center cursor-pointer ${
                activeName === "Credit & Debit cards" && "bg-white"
              } ${activeName === "Credit & Debit cards" && "text-blue"}`}
              onClick={handleOnClick}
            >
              <BsCreditCard style={{ fontSize: "20px", marginRight: "10px" }} />
              Credit & Debit cards
            </div>
          </div>

          {/* UPI Section */}
          {activeName === "UPI" ? (
            <div className="xl:px-10 mt-10 xl:mt-0 w-[300px] md:w-[340px] xl:w-[600px] space-y-5 m-auto">
              <div className="flex items-center space-x-5">
                <div>
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_309,h_84,e_trim/UPI-logo_fjr18d"
                    alt=""
                    className="w-[60px]"
                  />
                </div>
                <div className="text-[12px] w-[230px] text-gray-600">
                  Transfer money from your bank account using UPI with your
                  registered VPA
                </div>
              </div>

              <div className="flex items-center space-x-5">
                <div className="text-[10px] xl:text-[13px] text-gray-500">
                  We accept
                </div>
                <div className="flex items-center space-x-1 md:space-x-5">
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/GooglePay_lh8a267"
                    alt=""
                    className="w-[50px] xl:w-[70px]"
                  />
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PhonePe_x1g54c7"
                    alt=""
                    className="w-[50px] xl:w-[70px]"
                  />
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/BHIM_lkkvup7"
                    alt=""
                    className="w-[50px] xl:w-[70px]"
                  />
                </div>
                <div className="text-[13px] text-gray-500">& more</div>
              </div>

              <hr className="border-1 border-black" />

              <div>
                <div className="text-black font-bold">Pay via New VPA</div>
                <div className="text-[12px] text-gray-600">
                  You must have a Virtual Payment Address
                </div>
              </div>

              <div className="border-2 border-gray-400 p-5">
                <input
                  type="text"
                  id="vpa"
                  className="outline-0 w-[250px] md:w-[290px] xl:w-[460px] text-lg placeholder:text-sm"
                  placeholder="Enter VPA"
                />
              </div>

              <div className="flex space-x-5">
                <input
                  id="save vpa"
                  type="checkbox"
                  value="Securely save this VPA for a faster checkout next time."
                  className="accent-blue"
                />
                <label htmlFor="save vpa">
                  Securely save this VPA for a faster checkout next time.
                </label>
              </div>

              <div
                className="mt-5 p-5 xl:w-[445px] m-auto bg-blue text-center text-gray-200 font-bold rounded-md hover:text-white cursor-pointer"
                onClick={() => {
                  navigate("/upi-transaction");
                  // window.location.reload();
                }}
              >
                VERIFY AND PAY
              </div>
            </div>
          ) : (
            <div></div>
          )}

          {/* NetBanking Section */}
          {/* {activeName === "Netbanking" ? (
          <div className="px-10 w-[600px] space-y-5"></div>
        ) : (
          <div></div>
        )} */}

          {/* Credit & Debit Cards Section */}
          {activeName === "Credit & Debit cards" ? (
            <div className="xl:px-10 mt-10 xl:mt-0 w-[300px] md:w-[340px] xl:w-[600px] space-y-5 m-auto">
              <div className="text-black font-bold">Add new card</div>

              <div className="flex items-center space-x-5">
                <div className="text-[13px] text-gray-500">We accept</div>
                <div className="flex items-center space-x-1 md:space-x-5">
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Visa_lztyeu"
                    alt=""
                    className="w-[30px]"
                  />
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Mastercard_wqoea2"
                    alt=""
                    className="w-[30px]"
                  />
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Amex_ozga1w"
                    alt=""
                    className="w-[30px]"
                  />
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Zeta_zybqrc"
                    alt=""
                    className="w-[30px]"
                  />
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/RuPayColoured_oyd73s_soebkd"
                    alt=""
                    className="w-[50px]"
                  />
                </div>
              </div>

              <div>
                <div className="border-2 border-b-0 border-gray-400 max-w-min p-5">
                  <input
                    type="text"
                    id="card number"
                    className="outline-0 text-lg w-[250px] md:w-[290px] xl:w-[460px] placeholder:text-sm"
                    placeholder="Card number"
                  />
                </div>
                <div className="flex flex-col xl:flex-row">
                  <div className="border-2 border-b-0 border-gray-400 max-w-min p-5">
                    <input
                      type="text"
                      id="validity"
                      className="outline-0 text-lg w-[250px] md:w-[290px] xl:w-[250px] placeholder:text-sm"
                      placeholder="Valid through (MM/YY)"
                    />
                  </div>
                  <div className="border-2 border-b-0 xl:border-l-0 border-gray-400 max-w-min p-5">
                    <input
                      type="text"
                      id="cvv"
                      className="outline-0 text-lg w-[250px] md:w-[290px] xl:w-[168px] placeholder:text-sm"
                      placeholder="CVV"
                    />
                  </div>
                </div>
                <div className="border-2 border-gray-400 max-w-min p-5">
                  <input
                    type="text"
                    id="name on card"
                    className="outline-0 text-lg w-[250px] md:w-[290px] xl:w-[460px] placeholder:text-sm"
                    placeholder="Name on card"
                  />
                </div>
              </div>

              <div>
                <div
                  className="p-5 xl:w-[445px] m-auto bg-blue text-center text-gray-200 font-bold rounded-md hover:text-white cursor-pointer"
                  onClick={() => {
                    navigate("/cards-transaction");
                    window.location.reload();
                  }}
                >
                  PAY
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
