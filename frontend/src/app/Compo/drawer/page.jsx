"use client"
import  React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { clearcart, closing, deletion, getcart } from '../redux/slice';
import Image from 'next/image';
import {loadStripe} from '@stripe/stripe-js'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AnchorTemporaryDrawer() {
    const {draw,usercart} = useSelector((state)=>state.add)
    
   
    
       
        var user = JSON.parse(localStorage.getItem('user'))
     
    
        var token = JSON.parse(localStorage.getItem('token'))
     
      
   
    console.log(token,'user');
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getcart(user))
     
      
    },[usercart])
    function deletecarts(){
      dispatch(clearcart(user))
    }
    function cod() {
      if (!usercart || usercart.length === 0) {
        toast.info('Please add something to your cart first');
        return; // Exit the function early if usercart is undefined or empty
      }
    
      toast.success('Your order is being processed. Wait for a reply from us.');
    }
    // console.log(usercart);
   
    function deletem(itemId){
      if(!token){
        toast.error('Session has expired,Please login again')
        
      }
      dispatch(deletion({itemId,token}))
      

    }
    
    const [state, setState] = React.useState({
     
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };




const makePayment = async()=>{
        const stripe = await loadStripe("pk_test_51P29mF08STO3etbH5addt4C6l8FQBDTntx3wtYpSJ5rtZj9aEIhYQNkpn7pkafyg1lacCXxzA8VMbO1Ka793Jstt00y62KIDru");

        const body = {
            products:usercart 
        }
        const headers = {
            "Content-Type":"application/json"
        }
        const response = await fetch("http://localhost:2000/api/create-checkout-session",{
            method:"POST",  
            headers:headers,
            body:JSON.stringify(body)
        });

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        });
        
        if(result.error){
            console.log(result.error);
        }
    }  
    const list = (anchor) => (
      <Box 
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 320,border:"1px solid" ,}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      >

       <div className='dark:bg-customGray' style={{height:"800px"}}>
       <div style={{height:""}} className='dark:bg-customGray'>
      <ToastContainer position='top-center' transition={Bounce} autoClose={6000} />
        
               
        <div className="flex h-full flex-col ">
        <div className="p-4">
          <div className='w-full flex  justify-between'>
          <span className="text-lg py-1 dark:text-gray-300 font-semibold">{user.name.toUpperCase()}&apos;s Cart</span>
<button onClick={()=>dispatch(closing())} className="inline-flex ms-10 items-center dark:border-white justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border h-10 px-4 py-2 rounded-lg">
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
  className="h-4 w-4 dark:text-gray-300"
>
  <path d="M18 6 6 18"></path>
  <path d="m6 6 12 12"></path>
</svg>
</button> 
          </div>
          <button onClick={deletecarts} className='p-2 underline dark:text-white'>
            Clear Cart
          </button>
          

<p className="mt-2 dark:text-gray-300">Your Cart products go here.</p>
</div>
          <div className="flex-1 border overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
             
              <div className="ml-3 flex h-7 items-center">
                
              </div>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {Array.isArray(usercart)&&usercart.map((item,index) => (
                    <li key={item._id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                       
                        <Image height={200} width={200} src={item.image1} alt='image1' 
                          className="h-full w-full object-cover object-center"

                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3 className='dark:text-gray-300'>
                              {/* <a href={product.href}>{product.name}</a> */}
                              {item.name}
                            </h3>
                            <p className="ml-4 dark:text-gray-300">Rs.{(item.price*item.quantity)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-400">{item.category}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500 dark:text-gray-400">Qty {item.quantity}</p>

                          <div className="flex">
                            <button onClick={()=>deletem(item._id)}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-10 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p className='dark:text-gray-300'>Subtotal:</p>
              <p className='dark:text-gray-300'>Rs.
              {Array.isArray(usercart)&&usercart.reduce((a,b)=>{
  return(
      a+Number(b.quantity*b.price)
  )

},0)}
              </p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6" >
              <button onClick={makePayment}
                
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </button>
            </div>
            <div className='text-center mt-5 text-lg'>

            <span className='dark:text-white'>OR</span>
            </div>
            <div className="mt-6" >
              <button onClick={cod}
                
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Cash on Delievery
              </button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p className='dark:text-gray-400'>
                or{' '}
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => dispatch(closing())}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      
   
  
</div>

       </div>
       
        
      </Box>
    );
  
    return (
      <div>

        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <Drawer
              anchor={anchor}
              open={draw}
              onClose={toggleDrawer(anchor, false)}
            >
               
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}

      </div>
    );
  }