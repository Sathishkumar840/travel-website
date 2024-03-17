import React from 'react'
import { CiSearch } from "react-icons/ci";
import Beach from "../../public/BeachVideo.mp4";

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video 
        className="w-full h-full object-cover"  
        src={Beach } 
        type="video/mp4"
        autoPlay 
        loop 
        muted >

        </video>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-800/10'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 '>
          <h1>First Class Travel</h1>
          <h2 className='py-2'>Top 1% Locations Worldwide</h2>
          <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md
           text-black bg-gray-100/90' >
            <div>
              <input className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none ' type="text" placeholder='Search Destination'/>

            </div>
            <div>
              <button><CiSearch  size={20}  className='icon' style={{color:'#fffffff'}}/></button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Hero