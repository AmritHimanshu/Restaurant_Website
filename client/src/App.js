import { Routes, Route } from "react-router-dom";
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
import Address from "./Pages/Address/Address";
import Payment from "./Pages/Payment/PaymentPage";
import UpiTransaction from "./Pages/Payment/UpiTransaction";
import CardsTransaction from "./Pages/Payment/CardsTransaction";
import OrderTrack from "./Pages/OrderTrack/OrderTrack";
import "./App.css";

function App() {

  return (
    <>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/delivery-address" element={<Address />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/upi-transaction" element={<UpiTransaction />} />
          <Route path="/cards-transaction" element={<CardsTransaction />} />
          <Route path="/order-track" element={<OrderTrack />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
