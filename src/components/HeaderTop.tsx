import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200  hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <FaTwitter />
            </div>
            <div className="header_top__icon_wrapper">
              <FaInstagram />
            </div>
            <div className="header_top__icon_wrapper">
              <FaLinkedin />
            </div>
          </div>

          <div className="text-gray-500 text-[12px]">
            <b>Free Shipping</b> This Week Order Over - $75
          </div>
          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="usd">USD $</option>
              <option value="eur">EUR €</option>
              <option value="inr">INR ₹</option>
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="French">French</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
