"use client"
import React, { useEffect, useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { changer } from '../redux/slice';
import Link from 'next/link'
import { useRouter } from 'next/navigation';


const Chanpass = () => {
    const [oldpass, setoldpass] = useState("")
    const [newpass, setnewpass] = useState("")
   
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.add)
    const router = useRouter()
 
     
      
        var token = JSON.parse(localStorage.getItem('token'))
       
      




    function submitdata(){
        if(!oldpass||!newpass){
            toast.error('Enter all the credentials')
        }

        else if(oldpass.length<8||newpass.length<0){
            toast.error('Password must include 8 letters')
           }
           else if(!token){
            toast.error('Session expired,Please login again')
           }
        else{

            const formdata={
                oldpass:oldpass,
                newpass:newpass
            }
            dispatch(changer({formdata,token}))

        }

    }
    useEffect(()=>{
        try {
            if(user&&user.data===null){
                toast.error(`${user.message}`)
            }
            if(user&&user.data&&user.data!==null){
                toast.success(`${user.message}`)
                setTimeout(()=>{
                    router.push('/Compo/login')

                },[2000])
            }
            
        } catch (error) {
            
        }
       


    },[user])
    console.log(user);

  return (
    <div className='py-10 dark:bg-customGray'>
    <ToastContainer  position='top-center' transition={Bounce} autoClose={2500} />
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-sm" data-v0-t="card"><div className="flex flex-col p-6 space-y-1"><h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">Update Password</h3><p className="text-sm text-muted-foreground">
      Enter your old password below to change your password
    </p></div><div className="p-6"><div className="space-y-4"><div className="space-y-2"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="Old">Old Password</label><input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="" onChange={(e)=>setoldpass(e.target.value)} required="" type="password"/></div><div className="space-y-2"><div className="flex items-center"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="password">New Password</label><a className="ml-auto inline-block text-sm underline">
           
          </a></div><input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="password" required="" type="password" onChange={(e)=>setnewpass(e.target.value)}/></div>
      
      </div>
      
        <div  className='mt-4'>
          <button  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" onClick={submitdata}>
            
            
        Change Password
            
            
            
      </button>
        </div>
      
      </div></div>

  </div>
  )
}

export default Chanpass