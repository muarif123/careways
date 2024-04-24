"use client"
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { sorting } from '../redux/slice'
const Sort = () => {
    const [clickedli, setclickedli] = useState(null)
    const relevance = [
        {
            index: 0,
            range: 'Low to high'

        },
        {
            index: 1,
            range: 'High to low'

        }
    ]
    const dispatch = useDispatch()
    function displayer({item,index}){
        dispatch(sorting(item.range))
        setclickedli(index)

        
    }
    function displayer2(range){
        dispatch(sorting(range))
      

        
    }
 


    return (
        <div className='p-2'>
          
            <label className='text-sm  dark:text-gray-400'>Sort by</label>
            <select onChange={(e)=>displayer2(e.target.value)} className="dark:bg-gray-700 block sm:hidden w-full p-2 border rounded">
                <option value="">Relevance</option>
                {relevance.map((item, index) => {
                    return (
                        <>

                            <option value={item.range}>{item.range}</option>
                        </>
                    )

                })}


               
            </select>

         


            <ul className="hidden sm:block">
             
                            <li className='underline'>
                                Relevance

                            </li>
                {relevance.map((item, index) => {
                    return (
                        <>

                            <li style={{cursor:"pointer",textDecoration:clickedli===index?'underline':"none"}} key={index} onClick={()=>displayer({item,index})}>{item.range}</li>
                        </>
                    )

                })}


            </ul>
        </div>
    )
}

export default Sort