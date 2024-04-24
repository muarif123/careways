"use client"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import Link from 'next/link'

import Marquee from "react-fast-marquee";
import { useRouter } from 'next/navigation';

const Feat = () => {
    const { products } = useSelector((state) => state.add)
    const router = useRouter()
    function displayer(itemId){
      localStorage.setItem('itemId',itemId)
       router.push('/Compo/detam/details')
       
   
   
     }
  

    return (
        <div className=''>
            <div className="flex items-center justify-between w-full mt-10 max-w-7xl px-4 mx-auto">
                <h2 className="text-3xl font-bold">Featured Products</h2>

            </div>
            <div className="w-full max-w-7xl px-4 mt-10 mx-auto">
                <Marquee style={{ height: "" }}>


                    {products.map((item, index) => {
                        return (
                            <>

                            
                               

                               

                                <div onClick={()=>displayer(item._id)} className="relative dark:shadow m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" >
    <Image height={1000} width={1000} classNameName="object-cover hover:scale-110 transition" src={item.image1} alt="product image" />
  </div>
  <div className="mt-4 dark:bg-gray-900  px-5 pb-5">
    <div className=''>
      <h5 className="text-xl dark:text-gray-300">{item.name}</h5>
     
    </div>
    <div className="mt-2 mb-5  flex items-center justify-between">
      <p>
   
        <span className="text-sm text-slate-900 dark:text-gray-300">Rs.{item.price}</span>
      </p>
     
    </div>
   
  </div>
</div>



                             







                            </>
                        )
                    })}


                </Marquee>
            </div>








        </div>
    )
}

export default Feat