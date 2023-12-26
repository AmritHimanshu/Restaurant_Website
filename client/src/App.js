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
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {

  const user = useSelector(selectUser);

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
          {user && <Route path="/cart" element={<CartPage />} />}
          {user && <Route path="/checkout" element={<Checkout />} />}
          {user && <Route path="/delivery-address" element={<Address />} />}
          {user && <Route path="/payment" element={<Payment />} />}
          {user && <Route path="/upi-transaction" element={<UpiTransaction />} />}
          {user && <Route path="/cards-transaction" element={<CardsTransaction />} />}
          {user && <Route path="/order-track" element={<OrderTrack />} />}
        </Routes>
      </div>
    </>
  );
}

export default App;
