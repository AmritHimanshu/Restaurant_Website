import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Gallery from "./Pages/Gallery/Gallery";
import Header from "./Pages/Header/Header";
import AboutUs from "./Pages/About/AboutUs";
import Contact from "./Pages/Contact/ContactUs";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import CartPage from "./Pages/Cart/CartPage";
import Checkout from "./Pages/CheckOut/CheckoutSection";
import SelectAddress from "./Pages/Address/SelectAddress";
import Address from "./Pages/Address/Address";
import Payment from "./Pages/Payment/PaymentPage";
import UpiTransaction from "./Pages/Payment/UpiTransaction";
import CardsTransaction from "./Pages/Payment/CardsTransaction";
import OrderTrack from "./Pages/OrderTrack/OrderTrack";
import "./App.css";

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const [cartItem, setCartItem] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch('/getData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (res.status !== 200) {
        const error = new Error(res.error);
        // throw error;
      }

      else {
        const data = await res.json();
        dispatch(login(data));
      }

      
    } catch (error) {
      // console.log(error);
    }
  }

  useEffect(() => {
    getData();

    const items = localStorage.getItem('items');
    if (items) setCartItem(true);
    else setCartItem(false);
  },[])

  return (
    <>
      <div className="">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {user && <Route path={`/cart`} element={<CartPage />} />}
          {user && !cartItem && <Route path={`/checkout`} element={<CartPage />} />}
          {user && cartItem && <Route path={`/checkout`} element={<Checkout />} />}
          {user && !cartItem && <Route path="/delivery-address" element={<CartPage />} />}
          {user && cartItem && <Route path="/delivery-address" element={<SelectAddress />} />}
          {user && <Route path="/add-delivery-address" element={<Address />} />}
          {user && <Route path="/payment" element={<Payment />} />}
          {user && <Route path="/upi-transaction" element={<UpiTransaction />} />}
          {user && <Route path="/cards-transaction" element={<CardsTransaction />} />}
          {user && <Route path="/order-track" element={<OrderTrack />} />}
          <Route path="*" element={<Home/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
