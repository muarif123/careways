"use client"
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
   
    <section className="w-full dark:bg-customGray py-6 md:py-12 lg:py-16">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About  CAREWAYS</h2>
          <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          We believe in bringing joy to your life through our products. Our mission is to provide high-quality goods that inspire and delight. Customer satisfaction is at the heart of everything we do.
          </p>
        </div>
        <Image
          src="https://res.cloudinary.com/diksmyvyt/image/upload/v1713187311/acme_ac771c.jpg"
          width="600"
          height="300"
          alt="Acme Inc products"
          className="aspect-video overflow-hidden rounded-lg object-cover object-center"
        />
      </div>
    </section>
  )
}

export default page