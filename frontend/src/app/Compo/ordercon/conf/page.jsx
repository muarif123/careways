
"use client"

import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { Button } from '@/components/ui/button';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Confi = () => {
  const [obj, setObj] = useState([]);
  const [form, setform] = useState({
    name: '',
    email: '',
    address:"",
    message: '',
    productDetails: '',
    totalPrice: 0
  });
  const [email, setemail] = useState("")
  const [subject, setsubject] = useState("")
  const [message, setmessage] = useState("")
  const [total, settotal] = useState("")
  const [address, setaddress] = useState('')
  const [loading, setloading] = useState(false)
  


  
     
     
      var confirmid = localStorage.getItem('confirmid')
      
    

    useEffect(() => {
    axios.get(`http://localhost:2000/api/getorderd/${confirmid}`)
      .then((res) => {
        console.log(res.data,'address');
        setObj(res.data);
        if (res.data.length > 0) {
          setform({
            name: res.data[0].user.name,
            email: res.data[0].user.email,
            address:res.data[0].user.address,
            message: '',
            productDetails: res.data.map((item, index) => `${item.name}  Rs.${item.price}`).join('\n'),
            totalPrice: res.data.reduce((total, item) => total + item.price, 0)
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [confirmid]);
  const sendemail = async () => {
    setloading(true);
    try {
      await axios.post('http://localhost:2000/send-email', {
        to: form.email,
        subject:`Hello ${form.name}
        `,
        text: `Your Order of following :
        ${form.productDetails}
        Total Price: Rs.${form.totalPrice} 
        has been placed successfully.
        We will update you soon about its arrival at your address of ${form.address}`
      });
      toast.success('Email sent successfully');
    } catch (error) {
      
      toast.error('Failed to send email');
    }
    setloading(false);
  };

  return (
    <div>
           <div className='py-20 dark:bg-customGray'>
                 <ToastContainer position='top-center' transition={Bounce} autoClose={2500} />

       <h1 className='text-center text-3xl font-bold'>Order Details</h1>
       <div className='w-11/12 sm:w-11/12 md:w-7/12 lg:w-7/12 xl:w-5/12 2xl:w-5/12 mx-auto mt-10'>
         <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
           <div className="flex flex-col space-y-1.5 p-6">
             <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Contact information</h3>
             <p className="text-sm text-muted-foreground">Enter your contact information.</p>
           </div>
           <div className="p-6 space-y-4">
             {obj.length > 0 && (
               <>
                 <div className="space-y-2">
                   <label
                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                     htmlFor="name"
                   >
                     Name
                   </label>
                   <input
                     value={form.name}
                     onChange={(e)=>setsubject(e.target.value)}
                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                     id="name"
                     name="name"
                     placeholder="Enter your name"
                   />
                 </div>
                 <div className="space-y-2">
                   <label
                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                     htmlFor="email"
                   >
                     Email
                   </label>
                   <input
                     value={form.email}
                     onChange={(e)=>setemail(e.target.value)}
                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                     id="email"
                     name="email"
                     placeholder="Enter your email"
                     type="email"
                   />
                 </div>
                 <div className="space-y-2">
                   <label
                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                     htmlFor="address"
                   >
                     Shipping Address
                   </label>
                   <input
                     value={form.address}
                     onChange={(e)=>setaddress(e.target.value)}
                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                     id="address"
                     name="address"
                     placeholder="Enter your address"
                     type="text"
                   />
                 </div>
               </>
             )}
           </div>
         </div>
         <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-2xl" data-v0-t="card">
           <div className="flex flex-col space-y-1.5 p-6">
             <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Product details</h3>
           </div>
           <div className="p-6 space-y-4">
             <div className="space-y-2">
               <label
                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                 htmlFor="product"
               >
                 Product details
               </label>
               <textarea
                 value={form.productDetails}
                 onChange={(e)=>setmessage(e.target.value)}
                 className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                 id="product"
                 name="productDetails"
                 placeholder="Enter the product details"
               ></textarea>
             </div>
             <div className="space-y-2">
               <label
                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                 htmlFor="total"
               >
                 Total price
               </label>
               <input
                 value={form.totalPrice}
                 onChange={(e)=>settotal(e.target.value)}
                 className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                 id="total"
                 name="totalPrice"
                 placeholder="Total"
                 type="number"
               />
             </div>
             <Button onClick={sendemail} className="w-full max-w-sm">
               {loading ? 'Sending...' : 'Send Quotation'}
             </Button>
           </div>
         </div>
       </div>
     </div>
      
    </div>
  )
}

export default Confi