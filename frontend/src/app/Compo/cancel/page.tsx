"use client"
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
   <div className='py-16 dark:bg-customGray'>
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-lg mx-auto" data-v0-t="card">
  <div className="space-y-1.5 p-6 flex flex-col items-center gap-1">
    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
      <span className="">Transaction failed</span>
    </h3>
    <p className="text-sm text-muted-foreground">
      <span className="">Your payment failed. If you need assistance, please contact support.</span>
    </p>
  </div>
  <div className="p-6 flex flex-col gap-4">
    <button className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 justify-center">
     <Link href={'/'}>
     
      Try again
     </Link>
    </button>
    <Link
      className="flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
      href="/Compo/contact"
    >
      Contact support
    </Link>
  </div>
</div>

   </div>

  )
}

export default page