"use client"
import React, { useEffect, useState } from 'react'
import Sidebox from '../sidecategory/page'
import Sort from '../sidesort/page'
import Image from "next/image"
import Link from "next/link"

import { useDispatch, useSelector } from 'react-redux'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'


const Resul = () => {
  const [message, setmessage] = useState('')
  const { query } = useSelector((state) => state.add)
  const router = useRouter()

  useEffect(() => {
    if (query && query.data === null) {
      setmessage(query.message)



    }
    else {
      setmessage(null)
    }

  }, [query])
  function displayer(itemId){
    
     
      localStorage.setItem('itemId',itemId)
    
  
     router.push('/Compo/detam/details')
     
 
 
   }
  return (
    <div className='flex w-12/12 py-10 dark:bg-customGray flex-wrap justify-center'>
      <ToastContainer position='top-center' transition={Bounce} autoClose={1000} />

      <div className='w-full sm:w-full md:w-2/12 lg:w-2/12 xl:w-2/12 2xl:w-2/12'>
        <Sidebox />
      </div>
      <div className='w-full sm:w-full md:w-7/12 lg:w-7/12 xl:w-7/12 2xl:w-7/12'>
        <div className='flex flex-wrap justify-between'>
          {message ? (
            <h1>{message}</h1>
          ) : (
            Array.isArray(query) && query.map((item, index) => {
              return (
                <>
                




                  <div style={{overflow:"hidden"}} className="bl mt-6 dark:hover:border-blue-600 border border-gray-200 rounded-lg p-6 dark:border-gray-800">

  
  
  <div onClick={()=>displayer(item._id)} className="aspect-[1/1] overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
    <Image
      src={item.image1}
      alt="Product Image"
      width={1000}
      height={1000}
      className="aspect-[1/1] hover:scale-110 transition object-cover border border-gray-200 dark:border-gray-800"
    />
  </div>

  <div className="grid gap-1.5 mt-3.5">
    <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
    <button className="text-sm text-white font-medium bg-blue-600 rounded-xl w-1/2 p-1">{item.price.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",")} PKR</button>
  </div>
</div>






                </>
              )
            })

          )


          }

        </div>
      </div>
      <div className='w-full sm:w-full md:w-2/12 lg:w-2/12 xl:w-2/12 2xl:w-2/12'>
        <Sort />
      </div>

    </div>
  )
}

export default Resul