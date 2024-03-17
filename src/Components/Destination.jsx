import React from 'react'
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";


const Destination = () => {
  return (
    <div className=' max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4 '>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 ' src={img1} alt="" />
            <img className='w-full h-full object-cover'src={img2} alt="" />
            <img className='w-full h-full object-cover'src={img3} alt="" />
            <img className='w-full h-full object-cover' src={img4} alt="" />
            <img className='w-full h-full object-cover' src={img5} alt="" />


        </div>
    </div>
  )
}

export default Destination