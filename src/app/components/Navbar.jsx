'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname();

  if(!pathname.includes('dashboard')){
    return (
      <div>
        <nav className='flex justify-center bg-green-400 p-4'>
            <ul className='flex gap-8'>
              <Link href="/"><li>Home</li></Link>
              <Link href="/post"><li>Post</li></Link>
              <Link href="/meals"><li>Meals</li></Link>
              <Link href="/products"><li>Products</li></Link>
              <Link href="/products/add"><li>Add Products</li></Link>
              <Link href="/about"><li>About</li></Link>
              <Link href="/services"><li>Services</li></Link>
              <Link href="/contact"><li>Contact</li></Link>
              <Link href="/register"><li>Register</li></Link>
            </ul>
          </nav>
      </div>
    )
  } else {
    return <></>
  }
  
}

export default Navbar
