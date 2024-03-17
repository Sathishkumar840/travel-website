import React from 'react'

import place1 from "../assets/images/place1.jpg"
import place2 from "../assets/images/place2.jpg"
import place3 from "../assets/images/place3.jpg"
import place4 from "../assets/images/place4.jpg"
import place5 from "../assets/images/place5.jpg"
import place6 from "../assets/images/place6.jpg"
import SelectCard from './SelectCard'

const selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectCard bg={place1} text="Maldives"/>
        <SelectCard bg={place2} text="Lakshadweep"/>
        <SelectCard bg={place3} text="Goa"/>
        <SelectCard bg={place4} text="Tarkarli"/>
        <SelectCard bg={place5} text="Digha"/>
        <SelectCard bg={place6} text="Kovalam"/>

    </div>
  )
}

export default selects