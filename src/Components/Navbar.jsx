import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { FaFacebook ,FaTwitter,FaYoutube,FaInstagram} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const[nav,setNav]=useState(false);
  const[logo,setLogo]=useState(false)
  const handleNav=()=>{
    setNav(!nav);
    setLogo(!logo)
  }
  return (
    <div className=" flex w-full justify-between items-center h-10 px-4 absolute z-10 text-white">
        <div >
        <h1 onClick={handleNav} className={logo? 'hidden':'block'}>BEACHES.</h1>
        </div>
        <div >
            <ul className=' hidden md:flex'>
                <li>Home</li>
                <li>Destination</li>
                <li>Travel</li>      
                <li>View</li>
                <li>Book</li>
            </ul>
        </div>
        <div className='hidden md:flex'>
        
        <CiSearch className='mr-3 ' size={20}  />
        <IoPersonOutline size={20} />
        </div>
        <div onClick={handleNav} className='md:hidden z-10'>
          {nav ? <AiOutlineClose className=" text-black"size={20} />: <HiOutlineMenu size={20} />}
        </div>
        <div onClick={handleNav}className={nav ? 'absolute left-0 top-0 text-black w-full bg-gray-100/90  z-10 px-4 py-7 flex flex-col': 'absolute left-[-100%]'}>
          <ul>
            <h1>BEACHES</h1>
            <li className="border-b ">Home</li>
            <li className="border-b ">Destination</li>
            <li className="border-b ">Travel</li>      
            <li className="border-b ">View</li>
            <li className="border-b ">Book</li>
            <div className='flex flex-col'>
              <button className='my-5'>Search</button> 
              <button>Account</button>
            </div>
            <div className='flex justify-between items-center my-6 '>
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaInstagram className="icon" />
            </div>

          </ul>
        </div>
    </div>
  )
}

export default Navbar