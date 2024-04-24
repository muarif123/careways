"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadcar } from '../redux/slice';
const Carpanel = () => {
    const [carimage, setcarimage] = useState('')
    const dispatch = useDispatch()

    function submitdata(){
        if(!carimage){
         toast.error('Please upload and image')
        }
        else{
            const formdata = new FormData()
            formdata.append('carimage',carimage)
            dispatch(uploadcar(formdata))
            toast.success('Image uploaded Successfully')

        }
    }

  return (
    <div className='py-10 dark:bg-customGray'>
      



      <ToastContainer position='top-center' transition={Bounce} autoClose={2500} />

<div className="rounded-lg border dark:bg-customGray border-gray-300 mx-auto bg-card text-card-foreground shadow-sm w-full max-w-lg" data-v0-t="card">
  <div className="flex flex-col space-y-1.5 p-6">
    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-center">
      Upload your image
    </h3>
    <p className="text-sm text-muted-foreground text-center">PNG or JPG. Max size 10MB.</p>
  </div>
  <div className="p-6 flex gap-4 flex-col">
    <div className="flex flex-col gap-1.5">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="image"
      >
        Select Image
      </label>
      <input onChange={(e)=>setcarimage(e.target.files[0])}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="image"
        accept="image/*"
        type="file"
      />
    </div>
    <div className="flex items-start gap-4">
      <div className="border border-gray-200 w-20 h-20 rounded-md overflow-hidden flex items-center justify-center border-dashed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-6 w-6"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <circle cx="9" cy="9" r="2"></circle>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
        </svg>
      </div>
      <div className="grid gap-1.5">
        <div className="text-sm font-medium">imag</div>
        <div className="flex items-center gap-1.5 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <circle cx="9" cy="9" r="2"></circle>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
          </svg>
          <span>image/jpeg - 500kb</span>
        </div>
      </div>
    </div>
  </div>
  <div className="items-center p-6 flex justify-end gap-2">
    <button onClick={submitdata} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
      Upload
    </button>
  </div>
</div>
    </div>
  )
}

export default Carpanel