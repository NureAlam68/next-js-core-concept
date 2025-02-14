'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProductAddForm = () => {
    const router = useRouter();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.productName.value;
        const payload = { name };
        const res = await fetch('http://localhost:3000/api/items', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const result = await res.json();
        form.reset();
        // alert('Product Added')
        router.push("/products")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='productName' placeholder='Product name' className='border p-1 mr-2 rounded-md'/>
        <button type='submit' className='px-2 p-1 bg-green-500 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default ProductAddForm
