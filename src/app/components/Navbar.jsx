import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-center'>
          <ul className='flex gap-8'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
