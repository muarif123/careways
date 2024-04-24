"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcart } from '../redux/slice'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Success = () => {

  const {usercart} = useSelector((state)=>state.add)
  

    var user = JSON.parse(localStorage.getItem('user'))
   

 
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getcart(user))
    
  },[usercart])

  return (
   <div className='py-16 dark:bg-customGray'>
    <div className="rounded-lg w-1/3 mx-auto border bg-card text-card-foreground shadow-sm" data-v0-t="card">
  <div className="flex flex-col items-center gap-4 p-10">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="h-14 w-14 text-green-500"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <div className="flex flex-col items-center gap-1 text-center">
      <h1 className="font-semibold text-3xl tracking-tighter sm:text-4xl">Payment successful</h1>
      <p className="text-gray-500 dark:text-gray-400">Thanks for your purchase!</p>
    </div>
    <div className="grid gap-1 text-sm md:gap-2">
      <div className="grid grid-cols-2 items-start">
       
            
            <div className="font-medium">Amount</div>
           
        
            <div className="ml-auto">

         {Array.isArray(usercart)&&usercart.reduce((a,b)=>{
  return(
      a+Number(b.quantity*b.price).toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",")
  )

},0)}
            </div>
      </div>
      <div className="grid grid-cols-2 items-start">
        <div className="font-medium">Customer ID</div>
        <div className="ml-auto">{usercart.map((item,index)=>{
          return(
            <>
            {item.user._id}
            
            </>
          )

        })}</div>
      </div>
    </div>
    <div className="border bg-card text-card-foreground shadow-sm w-full max-w-sm rounded-lg" data-v0-t="card">
      <div className="p-6 grid gap-2">
        <div>
          <div className="font-semibold">
          {usercart.map((item,index)=>{
          return(
            <>
            {item.user.name}
            
            </>
          )

        })}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
          {usercart.map((item,index)=>{
          return(
            <>
            {item.user.email}
            
            </>
          )

        })}
          </p>
        </div>
      </div>
    </div>
    
    <Button className="w-full max-w-sm">
    <Link href={'/'}>
      
      Return to homepage
      
    </Link>
      </Button>
  </div>
</div>

   </div>

  )
}

export default Success