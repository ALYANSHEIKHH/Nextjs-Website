import React from "react";
import { BiHeart, BiUser } from "react-icons/bi";
import {  FaSearch } from "react-icons/fa";
import {  FaUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-center pb-4 sm:pb-0 text-blackish">
            Logo
          </h1>
        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="w-full border border-gray-200 rounded-lg px-4 p-2 "
            type="text"
            placeholder="Enter any product name..."
          />

          <FaSearch className="absolute right-0 top-0 mt-3 mr-3 text-gray-400 size={20}" />
        </div>
        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
            <BiUser /> 
            <div className="relative">
                <BiHeart />
                <div className="bg-red-600 text-[12px] w-[18px] h-[18px] rounded-full absolute
                text-white grid place-items-center translate-x-1 -translate-y-1 top-0 right-0">
                    0
                </div>
                
            </div>
            <div className="relative">
                <HiOutlineShoppingBag />
                <div className="bg-red-600 text-[12px] w-[18px] h-[18px] rounded-full absolute
                text-white grid place-items-center translate-x-1 -translate-y-1 top-0 right-0">
                    0
                </div>
                
            </div>

        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
