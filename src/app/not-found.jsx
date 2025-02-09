import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center'>
      <div>
      <h1>404 NOT FOUND</h1>
      <Link href='/'>Go Back to Home</Link>
      </div>
    </div>
  )
}

export default NotFound
