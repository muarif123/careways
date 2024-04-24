
"use client";

import { Carousel } from "flowbite-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edits, getcarousel } from "../redux/slice";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";

function AdmCarousels() {
  const { carfile } = useSelector((state) => state.add);
  const dispatch = useDispatch();
  const router = useRouter()

  
  useEffect(() => {
    dispatch(getcarousel());
  }, []);
  function displayer(itemId){
    
     
      localStorage.setItem('carId',itemId)
    
     router.push('/Compo/cared/caredit')
     
 
 
   }

  return (
    <div className="relative dark:bg-customGray" style={{}}>
      <div className="ch mx-auto relative">
        <Carousel>
          {carfile &&
            carfile.map((item, index) => {
              return (
                <div key={index} className="relative">
                 
                <Image style={{objectFit:"cover",height:"100%",width:"100%"}} src={item.carimage} height={1000} width={1000} alt=""/>
                  
                  
             
                  <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 hover:opacity-50 transition-opacity duration-300">
                   
                   
                    
                    <button onClick={()=>displayer(item._id)}  className="text-white bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300">
                      Edit
                    </button>
               
                  </div>
                </div>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
}

export default AdmCarousels;
