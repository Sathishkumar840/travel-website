import React, { useState } from 'react'

const slideData=[
  {
    url:'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url:'https://plus.unsplash.com/premium_photo-1663119029722-0da758fa1181?q=80&w=1493&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  },
  {
    url:'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

const Carousel = () => {
  const[slide,setSlide]=useState(0)

  return (
    <div className=' max-w-[1240px] px-4 py-16 relative flex justify-center items-center'>
      
      {/* <img src={slideData[0].url} alt="" /> */}
      {slideData.map((item,index)=>(
        <div key={index} className={index===slide ?'opacity-100':'opacity-100'}>
        
          {index===slide && (<img className='w-full rounded-md' src={item.url} alt="" />)}
        </div>


      ))
      

      }
    </div>
  )
}

export default Carousel