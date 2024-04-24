"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link"
import { updatepass } from '../redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const Newpass = () => {
    const [email, setemail] = useState("")
    const [newpass, setnewpass] = useState("")
    const {user} = useSelector((state)=>state.add)
    const dispatch = useDispatch()
    const router = useRouter()
    function changepass(){
        if (!email || !newpass ) {
  
            toast.error("Enter all the credentials!");
          }
          else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
            toast.error('Please include @ and .com in your projects')
          }
          else if (newpass.length < 8) {
            toast.error('Password must include 8 letters')
          }
          else {
            const formdata = {
             
              email: email,
              newpass: newpass,
              
            }
            dispatch(updatepass(formdata))
           
           
      
      
          }
    }
    useEffect(()=>{

        if(user&&user.message==='Verification failed'){
            toast.error(user.message)
         
        }
        else if(user&&user.message==='Password Updated Successfully'){
            toast.success(user.message)

            setTimeout(()=>{
                router.push('/Compo/login')
                 },[4500])
        }

    },[user])
    console.log(user,'updated');
  return (
    <div>
         <div className='py-10 dark:bg-customGray'>
    <ToastContainer  position='top-center' transition={Bounce} autoClose={4500} />
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-sm" data-v0-t="card"><div className="flex flex-col p-6 space-y-1"><h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">Forgot Password?</h3><p className="text-sm text-muted-foreground">
      Enter your email to verify and change your password 
    </p></div><div className="p-6"><div className="space-y-4"><div className="space-y-2"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label><input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="m@example.com" onChange={(e)=>setemail(e.target.value)} required="" type="email"/></div><div className="space-y-2"><div className="flex items-center"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="password">Password</label><Link className="ml-auto inline-block text-sm underline" href={'/Compo/newpassword'}>
        
          </Link></div><input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="password" required="" type="password" onChange={(e)=>setnewpass(e.target.value)}/></div>
      
      </div>
      
        <div  className='mt-4'>
          <button onClick={changepass}  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
            
            
        Change Password
            
      </button>
        </div>
      
     </div></div>

  </div>
    </div>
  )
}

export default Newpass