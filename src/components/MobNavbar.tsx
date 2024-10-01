import React from 'react'
import { AiOutlineAppstore, AiOutlineHome } from 'react-icons/ai'
import { BiHeart } from 'react-icons/bi'
import { FiDivideCircle } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import {  IoMenuOutline } from 'react-icons/io5'


const MobNavbar = () => {
  return (
    <div className='lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px]
    mob_navbar px-8'>
        <div className='flex justify-between text-[28px] py-2'>
            <IoMenuOutline/>
            <div className="relative">
                <HiOutlineShoppingBag />
                <div className="bg-red-600 text-[12px] w-[18px] h-[18px] rounded-full absolute
                text-white grid place-items-center translate-x-1 -translate-y-1 top-0 right-0">
                    0
                </div>
                </div>
                <AiOutlineHome/>
                <div className="relative">
                <BiHeart />
                <div className="bg-red-600 text-[12px] w-[18px] h-[18px] rounded-full absolute
                text-white grid place-items-center translate-x-1 -translate-y-1 top-0 right-0">
                    0
                </div>
                
            </div>
            <AiOutlineAppstore/>
        </div>
      
    </div>
  )
}

export default MobNavbar
