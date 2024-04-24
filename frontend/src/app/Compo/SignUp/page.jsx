"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../redux/slice'
import { useRouter } from 'next/navigation'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sup = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [address, setaddress] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()

  function submitdata() {
    if (!name || !email || !password || !address) {
  
      toast.error("Enter all the credentials!");
    }
    else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
      toast.error('Please include @ and .com in your projects')
    }
    else if (password.length < 8) {
      toast.error('Password must include 8 letters')
    }
    else {
      const formdata = {
        name: name,
        email: email,
        password: password,
        address:address
      }
      dispatch(signup(formdata))

      router.push('/Compo/login')


    }
  }

  return (
    <div className='py-10 dark:bg-customGray'>
      <ToastContainer position='top-center' transition={Bounce} autoClose={1000} />
      <div className="mx-auto bg-card max-w-sm space-y-6 border p-3 border-rounded rounded-xl"><div className="space-y-2 text-center"><h1 className="text-3xl font-bold">Sign Up</h1><p className="text-gray-500 dark:text-gray-400">
        Enter your information to create an account
      </p></div>
      <div className="space-y-4"><div className="space-y-2"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="username">Username</label>
      <input onChange={(e) => setname(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="username" placeholder="johndoe" required="" /></div>
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label>
        <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" onChange={(e) => setemail(e.target.value)} placeholder="m@example.com" required="" type="email" /></div>
       
          <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="password">Password</label>
          <input onChange={(e) => setpassword(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="password" required="" placeholder='' type="password" />
          </div>
          <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="password">Shipping address</label>
          <textarea onChange={(e) => setaddress(e.target.value)} className="flex h-35 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="password" required="" placeholder='' type="text" />
          </div>
          
          <button className="inline-flex  items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" onClick={submitdata}>
        Sign Up
      </button></div></div>
    </div>
  )
}

export default Sup