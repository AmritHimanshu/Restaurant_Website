import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="leading-10">
      <div className="bg-blue bg-opacity-90 px-5 xl:px-40 py-10 text-left text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4">
        <div className="my-5">
          <div className="font-bold text-xl">About Us</div>
          <p className="leading-7 mt-4 text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            obcaecati reprehenderit maiores. Dolorum delectus sit recusandae
            nemo voluptatum ad officia.
          </p>
          <div className="flex space-x-10 mt-10">
            <a href="">
              <img
                src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png"
                alt=""
                className="w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/facebook-256.png"
                alt=""
                className="w-[50px] cursor-pointer"
              />
            </a>
            <a href="">
              <img
                src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-64.png"
                alt=""
                className="w-[50px] cursor-pointer"
              />
            </a>
          </div>
        </div>

        <div className="my-5 md:text-center">
          <div className="font-bold text-xl">Quicks Links</div>
          <div className="text-start w-[100px] md:m-auto">
            <div className="cursor-default text-sm my-4">
              <Link to="/">Home</Link>
            </div>
            <div className="cursor-default text-sm my-4">
              <Link to="/about">About Us</Link>
            </div>
            <div className="cursor-default text-sm my-4">
              <Link to="/menu">Menu</Link>
            </div>
            <div className="cursor-default text-sm my-4">
              <Link to="/gallery">Gallery</Link>
            </div>
            <div className="cursor-default text-sm my-4">
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="cursor-default text-sm my-4">
              <Link to="/cart">Cart</Link>
            </div>
          </div>
        </div>

        <div className="my-5 mb-10 md:w-[250px] lg:w-[300px]">
          <div className="font-bold text-xl">Contact Information</div>
          <div className="text-sm my-4 flex space-x-2">
            <img
              src="https://cdn4.iconfinder.com/data/icons/travel-and-holiday-3/32/location-64.png"
              alt="Location"
              className="w-[30px] h-[30px]"
            />
            <div>Near Girja Apartment, Bazaar Samiti, Saketpuri, Patna-16</div>
          </div>

          <div className="text-sm my-4 flex space-x-2">
            <img
              src="https://cdn1.iconfinder.com/data/icons/freelance-1/64/phone-call-telephone-conversation-number-64.png"
              alt="Phone"
              className="w-[30px] h-[30px]"
            />
            <div>(+91) 94857362536 / (+91) 8746392882</div>
          </div>

          <div className="text-sm my-4 flex items-center space-x-2">
            <img
              src="https://cdn1.iconfinder.com/data/icons/neliku-office/128/yumminky-neliku-office-21-256.png"
              alt="Email"
              className="w-[27px] h-[30px]"
            />
            <div className="space-y-2">
              <div>official@example.com</div>
              <div>info@example.com</div>
            </div>
          </div>
        </div>

        <div className="my-5 mb-10 md:w-[300px]">
          <div className="font-bold text-xl">We Welcome You</div>
          <div className="text-gray-100 mt-4">
            Monday-Friday from 09:00 am to 10:00 pm
          </div>
          <div className="text-gray-200">
            Saturday-Sunday from 09:00 am to 01:00 pm
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
