import { redirect } from 'next/navigation'
import React from 'react'

const ProductsPage = async() => {
    const res = await fetch('http://localhost:3000/api/items', {
        cache: 'force-cache'
    })
    const data = await res.json()

    if(data.length < 20) {
        redirect("/dashboard/products/add")
    }
  return (
    <div className='mt-10 px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {
        data?.map(item => <h1 className='border p-4 bg-green-300' key={item._id}>{item.name}</h1>)
      }
    </div>
  )
}

export default ProductsPage
