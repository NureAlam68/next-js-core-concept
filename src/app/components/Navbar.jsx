import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-center bg-green-400 p-4'>
          <ul className='flex gap-8'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/services"><li>Services</li></Link>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
