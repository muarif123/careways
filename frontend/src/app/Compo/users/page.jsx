"use client"
import React, { useEffect } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useDispatch, useSelector } from 'react-redux'
import { getusersi } from '../redux/slice'

const Usestat = () => {
    const {user} = useSelector((state)=>state.add)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getusersi())

    },[user])
  return (
    <>
    <div className='py-10 dark:bg-customGray'>
    <h1 className='text-center text-3xl font-bold'>User Statistics</h1>
    <div className='w-10/12 mx-auto mt-10 border rounded-lg'>
  <Table>
    <TableHeader>
    
      <TableRow>
        <TableHead className="w-[100px] text-left">User</TableHead> {/* Adjusted alignment */}
        <TableHead className="text-right">Email</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {Array.isArray(user) &&
        user.map((invoice, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{invoice.name}</TableCell>
            <TableCell className="text-right">{invoice.email}</TableCell> {/* Adjusted alignment */}
          </TableRow>
        ))}
    </TableBody>
    <TableFooter></TableFooter>
  </Table>
</div>

    </div>
    
       
    </>

  )
}

export default Usestat