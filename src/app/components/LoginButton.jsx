'use client'
import React from 'react'
import {signIn} from "next-auth/react"


const LoginButton = () => {
  return (
    <div>
      <button onClick={() => signIn()} className='px-2 py-1 bg-blue-950 text-white'>
        Login
      </button>
    </div>
  )
}

export default LoginButton
