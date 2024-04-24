"use client"
import React, { useEffect, useState } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from 'react-redux';
import axios from "axios"

import { useRouter } from 'next/navigation';
import { edits, updateimg1, updateimg2, updateimg3 } from '../../redux/slice';
const Edform = () => {

 
 

    
      var itemId = localStorage.getItem('itemId')
    
     
    

    const [editpro, seteditpro] = useState({})
    const {products} = useSelector((state)=>state.add)
    useEffect(()=>{
        axios.get(`http://localhost:2000/api/getone/${itemId}`)
        .then((res)=>{
            console.log(res.data,'res.data');
            seteditpro(res.data)
        })


    },[itemId])

    const [name, setname] = useState("")
    const [price, setprice] = useState(0)
    const [category, setcategory] = useState("")
    const [image1, setimage1] = useState("")
    const [image2, setimage2] = useState("")
    const [image3, setimage3] = useState("")
    const [description, setdescription] = useState('')

    
      var token = JSON.parse(localStorage.getItem('token'))
      
      settoken(token)
     
    
  

    const router = useRouter()
    const dispatch = useDispatch()
    function sendata(){
      if(!token){
        toast.error('Your Session has expired,Please login again')
      }
      else{
        const formData = new FormData()
        formData.append('name', editpro.name);
        formData.append('price', editpro.price);
        formData.append('category', editpro.category);
       
        formData.append('description',description)

        dispatch(edits({formData,index:editpro._id,token}))
        toast.info('Item is beign updated')
        setTimeout(() => {
            router.push('/Compo/adminproducts')
            
        }, [6000]);

      }
       
       
    }
    function editer(e){
      
        

            seteditpro({
                ...editpro,[e.target.name]:e.target.value
            })
        
    }
    function editer1(e){
      const formData2 = new FormData()
      setimage1(e.target.files[0])
      formData2.append('image1',e.target.files[0])
      dispatch(updateimg1({formData2,index:editpro._id,token}))


    }
    function editer2(e){
      const formData3 = new FormData()
      setimage2(e.target.files[0])

      formData3.append('image2',e.target.files[0])
      dispatch(updateimg2({formData3,index:editpro._id,token}))

    }
    function editer3(e){
      const formData4 = new FormData()
      setimage3(e.target.files[0])

      formData4.append('image3',e.target.files[0])
      dispatch(updateimg3({formData4,index:editpro._id,token}))

    }
    

  return (
    <div className='w-full dark:bg-customGray'>
      <div className='w-11/12 sm:w-11/12 md:w-10/12 xl:w-7/12 2xl:w-7/12 py-10 mx-auto'>
    <ToastContainer  position='top-center' transition={Bounce} autoClose={6000} />

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"><div className="p-6 flex flex-row space-y-0 items-start gap-2"><div className="grid gap-1"><h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Upload Product</h3><p className="text-sm text-muted-foreground">Fill in the details below</p></div></div><div className="p-6 grid gap-4 md:gap-6"><div className="grid gap-2"><label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" for="name">
        Name
      </label>
      <input value={editpro.name} onChange={editer} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" name='name' id="name" placeholder="Enter product name" required=""/></div><div className="grid gap-2"><label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" for="price">
        Price
      </label><input name='price' value={editpro.price} onChange={editer} className="flex h-10  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-24" id="price" placeholder="Enter product price" required="" prefix="&amp;#36;" type="number"/></div><div className="grid gap-2"><label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" for="category">
        Category
        <select name='category' value={editpro.category} onChange={editer} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>All</option>
    <option value="laptops">Laptops</option>
    <option value="pcs">PCs</option>
    <option value="accessories">Accessories</option>
    <option value="printers">Printers</option>
  </select>


      
 
      </label>
      <div className="grid gap-2">
                    <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" for="name">
          Description
        </label>
          <textarea value={editpro.description}  onChange={(e) => setdescription(e.target.value)} style={{height:"100px"}} className="flex w-full rounded-md border border-input bg-transparent  px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="description" placeholder="Enter product description" required="" />
          
          </div>
        Images
<div className="flex items-center justify-center w-full">
    
    <div className='w-full flex justify-between flex-wrap'>
    <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo-1
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-400">
                    <label 
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input name='image1' onChange={(e)=>editer1(e)} id="file-upload"  type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo-2
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-400">
                    <label
                      htmlFor="file-upload2"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input name='image2'  onChange={(e)=>editer2(e)} id="file-upload2"  type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo-3
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-400">
                    <label
                      htmlFor="file-upload3"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input name='image3'  onChange={(e)=>editer3(e)} id="file-upload3"  type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

    </div>
  
          
</div> 
</div><button onClick={sendata} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" >Upload</button></div>

</div>

    </div>



    </div>
    
  )
}

export default Edform