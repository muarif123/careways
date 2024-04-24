"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filte, getproducts } from '../redux/slice'

const Sidebox = () => {
    
    const { products,query,presence } = useSelector((state) => state.add)
    const dispatch = useDispatch()
    const [clickedli, setclickedli] = useState(null)
    function displayer(index){
        dispatch(filte(products[index].category))
        setclickedli(index)
    }
    
    
    useEffect(() => {
        dispatch(getproducts())
    }, []) 

    return (
        <div className='p-2'>
           
            <label className='text-sm  dark:text-gray-400'>Collections</label>
            <select onChange={(e)=>displayer(e.target.value)} className="block dark:bg-gray-700 sm:hidden w-full p-2 border rounded">
                <option value="">Select a category</option>
                {products.map((item, index) => {
                    const firstIndex = products.findIndex(product => product.category === item.category)
                   
                    if (index === firstIndex) {
                        return (
                            <option value={index} key={index}>{item.category}</option>
                        )
                    } else {
                        return null; 
                    }
                })}
            </select>

         
        

            <ul className="hidden sm:block">
                {products.map((item, index) => {
                    const firstIndex = products.findIndex(product => product.category === item.category)
                
                    if (index === firstIndex) {
                        return (

                            <li style={{cursor:'pointer',textDecoration:clickedli===index?'underline':"none"}} onClick={()=>displayer(index)} key={index}>{item.category}</li>
                        )
                    } else {
                        return null; 
                    }
                })}
            </ul>
        </div>
    )
}

export default Sidebox;
