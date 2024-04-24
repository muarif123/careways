"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "@/app/logo-no-background.png"
import Link from 'next/link'


const Footer = () => {
    const [roles, setroles] = useState('')
  
  
        var user = JSON.parse(localStorage.getItem('user'))
      
 
    useEffect(()=>{

        setroles(user.role)
    },[])

  return (
    <div className='w-full dark:bg-customGray py-3'>
        <div className='w-9/12 mx-auto border-t py-10'>
            <div className='flex flex-wrap w-full sm:w-full md:w-1/2 md:mx-auto lg:w-5/12 lg:mx-auto xl:w-1/3 2xl:w-1/3  justify-between'>
                <div className='w-max'>

                <Image src={logo} alt='' height={200} width={200}/>
                </div>
                <div className='w-max sm mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0'>
                    <ul className='dark:text-gray-400'>
                    <li className='mt-3 transition dark:hover:text-white hover:underline'>
                            <Link href={roles==="admin"?'/Compo/admin':'/'}>
                            
                            Home
                            </Link>
                        </li>
                        <li className='mt-3 transition dark:hover:text-white hover:underline'>
                            <Link href={'/Compo/about'}>
                            
                            About
                            </Link>
                        </li>
                        <li className='mt-3 transition dark:hover:text-white hover:underline'>
                            <Link href={'/Compo/contact'}>
                            
                            Contact
                            </Link>
                        </li>
                        <li className='mt-3 transition dark:hover:text-white hover:underline'>
                            <Link href={'https://www.facebook.com/profile.php?id=100063885495397'}>
                            
                            Facebook
                            </Link>
                        </li>
                        
                    </ul>

                </div>

            </div>
           
        </div>
        <div className='w-full border-t'>
            <div className='w-full sm:w-full md:w-9/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12  mx-auto flex flex-wrap justify-between'>
                <div className='w-full sm:w-full md:w-full lg:w-7/12 xl:w-7/12 2xl:w-7/12  p-4 flex flex-wrap justify-between'>
                    <div className='w-max '>
                   <p className='text-md dark:text-gray-400'>© 2023-2024 Careways, Inc. All rights reserved.</p>
                    </div>
                    <span style={{height:"25px",width:"1px"}} className='bg-gray-400'></span>
                    <div className='w-max '>
                        <p className='text-md dark:text-gray-400'>Designed in Pakistan</p>

                    </div>

                </div>
                <div className='w-full sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-4'>
                <p className='text-md dark:text-gray-400'>Crafted by Careways Technologies.</p>


                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer