import React from 'react'
import { useState } from 'react';
import './Slider.scss';

//import mui icons for slider
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Slider = () => {

   const [currentSlide, setCurrentSlide] = useState(0)


   const data = [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
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
