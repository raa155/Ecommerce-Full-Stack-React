import React from 'react'
import { useState } from 'react';
import './Slider.scss';

//import mui icons for slider
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Slider = () => {

   const [currentSlide, setCurrentSlide] = useState(0)


   const data = [
      '/img/slider4.png',
      '/img/slider2.png',
      '/img/slider3.png'
   ];

   const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);

   }

   const nextSlide = () => {
      setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
   }




   return (
      <div className="slider">
         <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
         </div>
         <div className="icons">
            <div className="icon" onClick={prevSlide}>
               <KeyboardArrowLeftIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
               <KeyboardArrowRightIcon/>
            </div>
         </div>
      </div>
   )
}

export default Slider
