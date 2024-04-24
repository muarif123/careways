"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../redux/slice';
import { useRouter } from 'next/navigation';


const Logi = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [invalid, setinvalid] = useState('')
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.add)
    const router = useRouter()

    function submitdata(){
      if(!email||!password){
        toast.error('Enter all the credentials')

      }
     
      else{
        const formdata = {
          email:email,
          password:password
        }
        dispatch(login(formdata))


      }

    }
    useEffect(()=>{
      try {
        if(user&&user.data===null){
          toast.info(`${user.message}`)
         }
         if(user&&user.message=='Incorrect Password'){
          setinvalid(user.message)

         }
         if(user.data.response.role=="admin"){
           toast.success('Admin has logged in')
         
            
           
             localStorage.setItem('token',JSON.stringify(user.data.token))
             localStorage.setItem('user',JSON.stringify(user.data.response))
          
           setTimeout(()=>{
             router.push('/Compo/admin')

           },[2500])        
           setTimeout(()=>{
          
             
              localStorage.removeItem('token')
             
            
          },[432000000])  

        }
         if(user&&user.data!==null&&user.data.response&&user.data.token&&user.data.response.role!=="admin"){
          toast.success(`${user.message}`)
        
        
           
            localStorage.setItem('token',JSON.stringify(user.data.token))
            localStorage.setItem('user',JSON.stringify(user.data.response))
          
          setTimeout(()=>{
            router.push('/')

          },[2500])  
          setTimeout(()=>{
         
              localStorage.removeItem('token')
            
          },[432000000]) 
         
         }
        
      } catch (error) {
        
      }
   

    },[user])
    console.log(user,'user');
  return (
  <div className='py-10 dark:bg-customGray'>
    <ToastContainer  position='top-center' transition={Bounce} autoClose={2500} />
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-sm" data-v0-t="card"><div className="flex flex-col p-6 space-y-1"><h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">Login</h3><p className="text-sm text-muted-foreground">
      Enter your email below to login to your account
    </p></div><div className="p-6"><div className="space-y-4"><div className="space-y-2"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label><input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="m@example.com" onChange={(e)=>setemail(e.target.value)} required="" type="email"/></div><div className="space-y-2"><div className="flex items-center"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="password">Password</label><Link className="ml-auto inline-block text-sm underline" href={'/Compo/newpassword'}>
            Forgot your password?
          </Link></div><input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="password" required="" type="password" onChange={(e)=>setpassword(e.target.value)}/></div><button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" onClick={submitdata}>
        Login
      </button>
      
      </div>
      
        <div  className='mt-4'>
          <button  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
            <Link href={'/Compo/changep'}>
            
        Change Password
            </Link>
      </button>
        </div>
      
      <div className="mt-4 text-center text-sm">
      Don &apos; t have an account?
      <Link className="underline" href="/Compo/SignUp">
        Sign up
      </Link></div></div></div>

  </div>

  )
}

export default Logi