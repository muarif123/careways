"use client"
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Con = () => {
  const formref = useRef()
  const [form, setform] = useState({
    name:"",
    email:"",
    message:""
  })
  const [loading, setloading] = useState(false)

  const handlechange=(e)=>{
    
    const {name,value}= e.target
    setform({...form,[name]:value})


  }

  const sendEmail = (e) => {
    e.preventDefault();
    setloading(true)
    emailjs
      .send('service_8aci29c', 'template_o7xgrho', {from_name:form.name,to_name:"Muarif",from_email:form.email,to_email:"careways@hotmail.com",message:form.message}, {
        publicKey: 'R3ueWqn0Snoku_uR6',
      })
      .then(
        () => {
          setloading(false)
         toast.success('Thank you for your query. We will get back to you as soon as possible.')
        },
        (error) => {
          setloading(false)
          toast.error('Something went wrong', error.text);
        },
      );
  };
  return (
    <div>
        <ToastContainer position='top-center' transition={Bounce} autoClose={2500} />
       
<section  className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13605.193210000843!2d74.341471!3d31.515966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190458d32a5d45%3A0x8cbd6ce309877ba4!2sI.T.%20Tower!5e0!3m2!1sen!2s!4v1713187883560!5m2!1sen!2s" style={{}}></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white dark:bg-customGray z-[1] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="dark:text-gray-300 text-lg mb-1 font-medium title-font">Get in Touch</h2>
      <p className="leading-relaxed mb-5 dark:text-gray-300">Want to pursue a offical relation?Contact us</p>
      <form ref={formref} onSubmit={sendEmail}>
  <div className="relative mb-4">
    <label htmlFor="name" className="leading-7 text-sm dark:text-gray-300">Your Name</label>
    <input type="text" id="name" name="name" value={form.name} onChange={handlechange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
  </div>
  <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-sm dark:text-gray-300">Your Email</label>
    <input type="email" id="email" name="email" value={form.email} onChange={handlechange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
  </div>
  <div className="relative mb-4">
    <label htmlFor="message" className="leading-7 text-sm dark:text-gray-300">Your Message</label>
    <textarea id="message" name="message" value={form.message} onChange={handlechange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
  </div>
  <button type="submit" value='Send' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
  {loading?"Sending...":'Send'}
  </button>
</form>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Con