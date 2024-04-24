"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Image from 'next/image'

const Odet = () => {
    const [obj, setobj] = useState([])
  
   

      
       
     
        var odetails = localStorage.getItem('odetails')
     
      
 
    useEffect(()=>{
        axios.get(`http://localhost:2000/api/getorderd/${odetails}`)
        .then((res)=>{
            setobj(res.data)
           
            console.log(res.data);

        })

    },[odetails])
  return (
    <div className='py-20 dark:bg-customGray'>
    <h1 className='text-center text-3xl font-bold'>Order Details</h1>

 
  <div className="rounded-lg mt-10 dark:bg-customGray mx-auto border bg-card text-card-foreground shadow-sm w-full max-w-2xl" data-v0-t="card">
   {obj.length > 0 && (
    <div className="flex-col space-y-1.5 p-6 flex items-center justify-between">
      <div className="space-y-1">
        <h2 className="text-lg font-bold">Customer ID: {obj[0].user._id}</h2>
        <div className="text-left">
          
        </div>
      </div>
    </div>
  )}
 
  

  <div className="p-6">
    <div className="space-y-4">
      {Array.isArray(obj)&&obj.map((item, index) => (
        <div key={index} className="grid border grid-cols-[auto_1fr_auto] items-center gap-4">
          <Image
            src={item.image1}
            width="64"
            height="64"
            alt="Product Image"
            className="rounded-md"
            style={{ aspectRatio: "64 / 64", objectFit: "cover" }}
          />
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">Quantity: {item.quantity}</p>
          </div>
          <p className="font-medium">Rs.{item.quantity * item.price}</p>
          <div classNameName="border-t border-gray-200 pt-4 flex justify-between items-center">
          
         
        </div>
        </div>
        
      ))}
       <div classNameName="text-2xl font-bold">
          Total:  Rs.
            {obj.reduce((total, item) => total + item.quantity * item.price, 0)}
          </div>
    </div>
  </div>

 
</div>

  </div>
 



  )
}

export default Odet