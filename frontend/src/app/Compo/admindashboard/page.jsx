"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcart2, updatestatus } from '../redux/slice'


import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Admdash = () => {
  const {cart} = useSelector((state)=>state.add)
  const dispatch = useDispatch()
  

 

  useEffect(()=>{
    dispatch(getcart2())
   
  },[cart])
  const groupedItems = {};
Array.isArray(cart)&&cart.forEach(item => {
  if (!groupedItems[item.user._id]) {
    groupedItems[item.user._id] = {
      user: item.user,
      total: 0,
      items: [],
    };
  }
  groupedItems[item.user._id].total += item.quantity * item.price;
  groupedItems[item.user._id].items.push(item);
});
const router = useRouter()
function changestatus(e,item){
  let iet = item.items[0]
  dispatch(updatestatus({e,iet}))

   
    localStorage.setItem('confirmid',item.user._id)
  

  router.push('/Compo/ordercon/conf')
  

}
function displayer(itemId){
  
 
    localStorage.setItem('odetails',itemId)
  
  router.push('/Compo/order/odetail')

}
 

  return (
    <div className='dark:bg-customGray'>



<div className="py-16">
<h1 className='text-center text-3xl font-bold'>Admin Dashboard</h1>

  
  <div className="flex flex-col">
    
    <main className="p-6">
      <div className="border rounded-lg p-2">
        <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
  <thead className="[&amp;_tr]:border-b">
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
        Customer_ID
      </th>
      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 min-w-[150px]">
        Customer
      </th>
      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
        Date
      </th>
      <th className="h-12 font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
        Total
      </th>
      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
        Status
      </th>
    </tr>
  </thead>
  <tbody className="[&amp;_tr:last-child]:border-0">
    {Object.values(groupedItems).map(group => (
      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" key={group.user._id}>
        <td style={{cursor:"pointer"}} onClick={()=>displayer(group.user._id)} className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
          
            {group.user._id}
          
        </td>
        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{group.user.name}</td>
        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{group.items[0].created}</td> {/* Assuming all items in the group have the same creation date */}
        <td className="p-4 align-middle text-center pr-0">Rs. {group.total}</td> {/* Adjusted alignment to right */}
        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
          <div className="flex items-center space-x-2">
            <select onChange={(e)=>changestatus(e.target.value,group)}  disabled={group.items[0].status==='fulfilled'?true:false}
             
              className="rounded-md bg-transparent border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={group.items[0].status} 
            >
              <option className='dark:bg-black bg-transparent' value="pending">Pending</option>
              <option className='dark:bg-black bg-transparent' value="fulfilled">Fulfilled</option>
            </select>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </main>
  </div>
</div>
    </div>
  )
}

export default Admdash