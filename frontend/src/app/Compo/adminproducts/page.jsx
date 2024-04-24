"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteprod, getproducts } from '../redux/slice'
import Image from 'next/image'
import { MdDelete, MdEdit } from 'react-icons/md'

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Admproduct = () => {

    const { products } = useSelector((state) => state.add)
    const dispatch = useDispatch()
    
    
        
        var token = JSON.parse(localStorage.getItem('token'))
       
      

   
    const router = useRouter()

    useEffect(() => {
        dispatch(getproducts())
    }, [products])
    function deletem(itemid){
        if(!token){
            toast.error('Session Expired,Please login again')

        }
        else{

            dispatch(deleteprod({itemid,token}))
            toast.success('Item deleted from your products')
        }
    }
    function displayer(itemId){
      
       
        localStorage.setItem('itemId',itemId)
      
       router.push('/Compo/editing/editform')
       
   
   
     }

    return (
        <div className='py-10 dark:bg-customGray'>
        <ToastContainer position='top-center' transition={Bounce} autoClose={2500} />

            <h1 className='text-3xl font-bold text-center'>Your Products</h1>
           
            <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div className="flex items-center justify-between pb-6">
    <div>
      <h2 className="font-semibold text-gray-700"></h2>
      <span className="text-xs text-gray-500"></span>
    </div>
    <div className="flex items-center justify-between">
      <div className="ml-10 space-x-8 lg:ml-40">
      
      </div>
    </div>
  </div>
  <div className="overflow-y-hidden rounded-lg border">
    <div className="overflow-x-auto">

      <table className="w-full">
  <thead>
    <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
      <th className="px-5 py-3">Product Name</th>
      <th className="px-5 py-3">Product Category</th>
      <th className="px-5 py-3">Price</th>
      <th className="px-5 py-3">Actions</th>
    </tr>
  </thead>
  <tbody className="text-gray-500 dark:text-gray-400">
    {products.map((item, index) => (
      <tr key={item._id}>
        <td className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-5 py-5 text-sm">
          <div className="flex items-center">
            <div className="h-20 w-20 flex-shrink-0">
              <Image className="h-full w-full rounded-full" height={1000} width={1000} src={item.image1} alt="" />
            </div>
            <div className="ml-3">
              <p className="whitespace-no-wrap">{item.name}</p>
            </div>
          </div>
        </td>
        <td className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-5 py-5 text-sm">
          <p className="whitespace-no-wrap">{item.category}</p>
        </td>
        <td className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-5 py-5 text-sm">
          <p className="whitespace-no-wrap">{item.price}</p>
        </td>
        <td className="border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-5 py-5 text-sm">
          <span className="rounded-full text-xs font-semibold">
           
              <button onClick={()=>displayer(item._id)} className="text-indigo-600 text-xl hover:text-indigo-800"><MdEdit /></button>
          
            <button onClick={() => deletem(item._id)} className="text-red-600 text-xl hover:text-red-800"><MdDelete /></button>
          </span>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
   
  </div>
</div>

        </div>
    )
}

export default Admproduct
