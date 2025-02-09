'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
    const router = useRouter();
    const isLoggedIn = false;

    const handleNavigation = () => {
        if(isLoggedIn) {
            router.push('/about/address')
        } else{
            router.push('/')
        }
    }
  return (
    <div>
      <h1 className='font-bold text-3xl'>About me</h1>
      <p><Link href="/about/address">Address</Link></p>
      <button type='button' onClick={handleNavigation} className='px-2 py-1 bg-green-500 rounded-sm'>Address</button>
    </div>
  )
}

export default About
