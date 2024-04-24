"use client"

import React, { useEffect, useState } from 'react'
import { UserCircleIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { rightn } from '@/app/Compo/redux/slice'
import { useDispatch } from 'react-redux'

export function Users() {
  const [userdata, setuserdata] = useState('')
 

   
      const udataString = localStorage.getItem('user');
   
     
  
 
  const dispatch = useDispatch()
  useEffect(()=>{
    if(udataString){

      const udata = JSON.parse(udataString);
      if(udata.role==='admin'){
        setuserdata(udata)
      }
    }


  },[udataString])
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <UserCircleIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-white" />
          
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={()=>dispatch(rightn())} >
        <Link  href={'/Compo/login'}>
          Log In
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=>dispatch(rightn())}>
        <Link href={'/Compo/SignUp'}>
          Sign Up
            </Link>
        </DropdownMenuItem>
        {userdata&&(
          <DropdownMenuItem onClick={()=>dispatch(rightn())}>
          <Link href={'/Compo/admindashboard'}>
            Dashboard
              </Link>
          </DropdownMenuItem>
        )}
          {userdata&&(
          <DropdownMenuItem onClick={()=>dispatch(rightn())}>
          <Link href={'/Compo/users'}>
            User Stats
              </Link>
          </DropdownMenuItem>
        )}
        {userdata&&(
          <DropdownMenuItem onClick={()=>dispatch(rightn())}>
          <Link href={'/Compo/adminpanel'}>
            Upload
              </Link>
          </DropdownMenuItem>
        )}
        {userdata&&(
          <DropdownMenuItem onClick={()=>dispatch(rightn())}>
          <Link href={'/Compo/adminproducts'}>
            My products
              </Link>
          </DropdownMenuItem>
        )}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
