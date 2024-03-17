import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Search from "./Components/Search";
import Destination from "./Components/Destination";
import Selects from "./Components/Selects";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
      
        <Navbar/>
        {/* <Hero/>
        <Destination/>
        <Search/>
        <Selects/> */}
        <Carousel/> 
        <Footer/> 
      
      </div>
      
    </>
  )
}

export default App
