"use client"
import React, { useState } from 'react'
import { ModeToggle } from '@/components/dark';
import { Users } from '@/components/user';

import { useDispatch, useSelector } from 'react-redux';
import { rightn, searching } from '../redux/slice'



import { useRouter } from 'next/navigation';

const Lefti = () => {
  const [queries, setqueries] = useState('')

    const dispatch = useDispatch()
    const router = useRouter()
    const {lefti} = useSelector((state)=>state.add)
    
  function handleSubmit(event){
    event.preventDefault()
    dispatch(searching(queries))
    dispatch(rightn())
    
   
    
    router.push('/Compo/result')
 
  }
  return (
    <div>
            <div className='p-3 sidebar bg-white dark:bg-black w-full block sm:block md:block lg:hidden xl:hidden 2xl:hidden h-screen' style={{transition: "0.3s ease-in ", top: "0%", transform: lefti ? 'translateX(0%)' : 'translateX(-100%)', }}>
    
    <button onClick={()=>dispatch(rightn())} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  h-10 px-4 py-2 rounded-lg">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
        </svg>
    </button>

  
    <div className="flex mt-6 items-center space-x-2 rounded-lg border border-gray-300 w-full px-3 h-10 dark:border-gray-800">
        <form className='flex justify-between w-full' onSubmit={handleSubmit}>
            <input
                className="flex w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 appearance-none bg-transparent border-0 h-8 dark:text-gray-100 dark:placeholder-gray-300"
                placeholder="Search for products..."
                type="search"
                onChange={(e) => setqueries(e.target.value)}
            />
            <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 w-8 h-8 rounded-full border border-gray-300 dark:border-gray-800"
                type="submit"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 hover:scale-110 transition"
                >
                    <path d="M6 18h8"></path>
                    <path d="M3 22h18"></path>
                    <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
                    <path d="M9 14h2"></path>
                    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
                    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </form>
    </div>
    
    <div style={{ zIndex: 1100 }} className='w-1/3 block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden mt-6 flex justify-between'>
        <ModeToggle    />
        <Users  style={{ zIndex: 1100 }} />
    </div>
    <div className='block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden mt-6'>
    </div>
</div>
    </div>
  )
}

export default Lefti