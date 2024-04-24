"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Image from 'next/image'
import { getprdetail, getproducts, getrelated } from '../redux/slice'
import Feat from "../featured/page"
import AdmCarousels from '../admcarousel/page';
import { useRouter } from 'next/navigation'


const Admn = () => {

  const { products } = useSelector((state) => state.add)
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getproducts())
  }, [products])
  function displayer(itemId){
   
   
      localStorage.setItem('itemId',itemId)
    
    router.push('/Compo/detam/details')
    


  }


  return (
    <div>
      <div>
        <AdmCarousels />
      </div>
      <section className="w-full dark:bg-customGray pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Discover the Perfect Tech
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Shop our exclusive collection of handpicked items. Quality and reliability in every piece.
              </p>
              <Link href={'/Compo/result'}
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"

              >
                Explore Products
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div className="w-full md:w-auto">
              {products.slice(9, 10).map((item,index) => {
                return (
                  <>
                    <div className='w-full overflow-hidden rounded-xl mn'>
                      <div style={{ overflow: "hidden" }} className="dark:hover:border-blue-600 border border-gray-200 rounded-lg p-6  dark:border-gray-800">

                       

                          <div onClick={()=>displayer(item._id)} className=" overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                            <Image
                              src={item.image1}
                              alt="Product Image"
                              width={1270}
                              height={300}
                              className="w-full h-full hover:scale-110 transition object-cover border border-gray-200 dark:border-gray-800"
                            />
                          </div>
                        
                        <div className="grid gap-1.5 mt-3.5">
                          <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
                          <button className="text-sm text-white font-medium bg-blue-600 rounded-xl w-1/2 p-1">{item.price} PKR</button>
                          <div className="grid gap-1.5">



                          </div>
                        </div>
                      </div>

                    </div>


                  </>
                )
              })}

             
            </div>
            <div className="w-full md:w-auto">
              {products.slice(1, 2).map((item,index) => {
                return (
                  <>
                    <div className='w-full overflow-hidden rounded-xl mn'>
                      <div style={{ overflow: "hidden" }} className="dark:hover:border-blue-600 border border-gray-200 rounded-lg p-6  dark:border-gray-800">

                        

                          <div onClick={()=>displayer(item._id)} className=" overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                            <Image
                              src={item.image1}
                              alt="Product Image"
                              width={1270}
                              height={300}
                              className="w-full h-full hover:scale-110 transition object-cover border border-gray-200 dark:border-gray-800"
                            />
                          </div>
                       
                        <div className="grid gap-1.5 mt-3.5">
                          <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
                          <button className="text-sm text-white font-medium bg-blue-600 rounded-xl w-1/2 p-1">{item.price} PKR</button>
                          <div className="grid gap-1.5">



                          </div>
                        </div>
                      </div>

                    </div>




                  </>
                )
              })}

            </div>
            <div className="w-full md:w-auto">
              {products.slice(2, 3).map((item,index) => {
                return (
                  <>
                    <div className='w-full overflow-hidden rounded-xl mn'>
                      <div style={{ overflow: "hidden" }} className="dark:hover:border-blue-600 border border-gray-200 rounded-lg p-6  dark:border-gray-800">

                      

                          <div onClick={()=>displayer(item._id)} className=" overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                            <Image
                              src={item.image1}
                              alt="Product Image"
                              width={1270}
                              height={300}
                              className="w-full h-full hover:scale-110 transition object-cover border border-gray-200 dark:border-gray-800"
                            />
                          </div>
                    
                        <div className="grid gap-1.5 mt-3.5">
                          <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
                          <button className="text-sm text-white font-medium bg-blue-600 rounded-xl w-1/2 p-1">{item.price} PKR</button>
                          <div className="grid gap-1.5">



                          </div>
                        </div>
                      </div>

                    </div>


                  </>
                )
              })}

            </div>
            <div className="w-full md:w-auto">
              {products.slice(4, 5).map((item,index) => {
                return (
                  <>
                    <div className='w-full overflow-hidden rounded-xl mn'>
                      <div style={{ overflow: "hidden" }} className="dark:hover:border-blue-600 border border-gray-200 rounded-lg p-6  dark:border-gray-800">

                      

                          <div onClick={()=>displayer(item._id)} className=" overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                            <Image
                              src={item.image1}
                              alt="Product Image"
                              width={1270}
                              height={300}
                              className="w-full h-full hover:scale-110 transition object-cover border border-gray-200 dark:border-gray-800"
                            />
                          </div>
                      
                        <div className="grid gap-1.5 mt-3.5">
                          <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
                          <button className="text-sm text-white font-medium bg-blue-600 rounded-xl w-1/2 p-1">{item.price} PKR</button>
                          <div className="grid gap-1.5">



                          </div>
                        </div>
                      </div>

                    </div>


                  </>
                )
              })}

            </div>
          </div>


        </div>
        <Feat />
      </section>

    </div>

  )
}

export default Admn
