"use client"
import { ModeToggle } from "@/components/dark"
import Image from 'next/image';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Lefti from "../leftbar/page"
import React, { useEffect, useState } from 'react';
import logo from "@/app/logo-no-background.png"
// import { Users } from '@/components/user';
import { useDispatch, useSelector } from 'react-redux';
import AnchorTemporaryDrawer from '../drawer/page';
import { drawing, filte, getcart, getproducts, leftn, searching } from '../redux/slice';
import { useRouter } from 'next/navigation';
import { Users } from '@/components/user';
const Navbar = () => {
  const [Open, setOpen] = useState(false);
  const [side, setside] = useState(false)
  const [clickedli, setclickedli] = useState(null)
  const [queries, setqueries] = useState('')
  const [userdata, setuserdata] = useState('')
  const {draw,query,products,lefti} = useSelector((state)=>state.add)
  const dispatch = useDispatch()
  const router = useRouter()

  function handleSubmit(event){
    event.preventDefault()
    dispatch(searching(queries))
    
   
    
    router.push('/Compo/result')
 
  }
  


  function displayer(index){
    dispatch(filte(products[index].category))
    setclickedli(index)
    router.push('/Compo/result')

    
}
const {usercart} = useSelector((state)=>state.add)
useEffect(()=>{
  dispatch(getcart())


},[usercart])

  


  

  return (
   
    <>
    <nav style={{position:"relative"}}  className='w-full py-3 dark:bg-customGray sm:py-3  md:p-8 lg:p-8 xl:p-8 2xl:p-8  border'>
      <div className='w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 mx-auto flex justify-between'>
        <div className='w-9/12 sm:w-9/12 md:w-10/12 lg:w-1/4 xl:w-1/4 2xl:w-1/4 flex justify-between'>
        <div className='flex w-full sm:full md:w-full  lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
        <div className='w-1/3 block sm:block md:block lg:hidden xl:hidden 2xl:hidden'>
        <button onClick={()=>dispatch(leftn())} className=" justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 rounded-lg flex gap-2 items-center px-4 py-2">
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
    className="h-4 w-4"
  >
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
  </svg>
</button>

        </div>
        <div style={{height:"auto",width:"maxContent"}} className='w-1/2 sm:w-1/2 md:w-1/2 lg:w-full xl:w-full 2xl:w-full py-2 sm:py-2 md:py-0 lg:py-2 xl:py-2 2xl:py-2 '>
        <Link href={'/'}>
        
        <Image src={logo} alt='' className='h-full w-full' style={{}} height={300} width={300}/> 
        </Link>
        
        
        </div>
       

      </div>
     

        </div>
      
      <div className='w-1/3 hidden sm:hidden md:hidden lg:block xl:block 2xl:block'>
      <div className="flex items-center space-x-2 rounded-lg border border-gray-300 w-full px-3 h-10 dark:border-gray-800">
        
  
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
      </div>
      <div className='w-2/12 sm:w-2/12 md:w-3/12 lg:w-2/12 xl:w-2/12 2xl:w-2/12 flex justify-between'>
    
<button style={{}} onClick={()=>dispatch(drawing())} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:scale-110 transition  h-10 p-2">

   
  

  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 hover:scale-110 transition "><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12">
    

  </path>
 
  </svg>
  <span className='dark:bg-white dark:text-black bg-black text-white' style={{marginTop:"-10px",borderRadius:"50%",height:"20px",width:"20px"}}>{usercart.length}</span>



  
</button>
<div className='hidden sm:hidden md:block lg:block xl:block 2xl:block'>

<ModeToggle/>
</div>
<div className='hidden sm:hidden md:block lg:block xl:block 2xl:block'>

<Users/>
</div>
<div>
  
</div>

      </div>

      </div>
     

    </nav>
    {lefti?(

    <Lefti/>
    ):""}
    
   


    <div className="relative">
      
      
      
     
     
    </div>

    {
      draw?<AnchorTemporaryDrawer/>:""

    }
    
    </>
    
  );
};

export default Navbar;
