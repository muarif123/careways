import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <>
      
      <button className='cursor-pointer z-[1] absolute left-0 top-0' onClick={onClick}>Previous</button>
      
      </>
      

      
    );
  }

export default SamplePrevArrow