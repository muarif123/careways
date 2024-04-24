import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <>
        <button className='absolute right-0 top-0' onClick={onClick}>next</button>
      </>
    );
  }

export default SampleNextArrow