import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  const data = [
    {
      "id": 1,
      "name": "Organic Fertilizer",
      "image": "https://i.ibb.co.com/zVV5Q2Bq/environmental-conservation-plant-sustainability.jpg",
      "description": "100% natural and eco-friendly organic fertilizers to enhance soil fertility and crop yield."
    },
    {
      "id": 2,
      "name": "NPK Fertilizer",
      "image": "https://i.ibb.co.com/zVV5Q2Bq/environmental-conservation-plant-sustainability.jpg",
      "description": "Balanced NPK (Nitrogen, Phosphorus, Potassium) fertilizers for optimal plant growth and nutrition."
    },
    {
      "id": 3,
      "name": "Liquid Fertilizer",
      "image": "https://i.ibb.co.com/zVV5Q2Bq/environmental-conservation-plant-sustainability.jpg",
      "description": "Easy-to-apply liquid fertilizers for quick absorption and faster results."
    },
    {
      "id": 4,
      "name": "Soil Testing",
      "image": "https://i.ibb.co.com/zVV5Q2Bq/environmental-conservation-plant-sustainability.jpg",
      "description": "Professional soil testing services to determine nutrient levels and recommend the right fertilizers."
    },
    {
      "id": 5,
      "name": "Custom Fertilizer Blends",
      "image": "https://i.ibb.co.com/zVV5Q2Bq/environmental-conservation-plant-sustainability.jpg",
      "description": "Tailored fertilizer blends designed to meet the specific needs of your crops and soil."
    },
    {
      "id": 6,
      "name": "Fertilizer Delivery",
      "image": "https://i.ibb.co.com/zVV5Q2Bq/environmental-conservation-plant-sustainability.jpg",
      "description": "Timely and reliable delivery of fertilizers to your farm or business location."
    },
    {
      "id": 7,
      "name": "Agricultural Consultancy",
      "image": "https://i.ibb.co.com/zVV5Q2Bq/environmental-conservation-plant-sustainability.jpg",
      "description": "Expert advice on fertilizer usage, crop management, and sustainable farming practices."
    },
    {
      "id": 8,
      "name": "Bulk Fertilizer Supply",
      "image": "https://i.ibb.co.com/zVV5Q2Bq/environmental-conservation-plant-sustainability.jpg",
      "description": "Cost-effective bulk fertilizer solutions for large-scale farming operations."
    }
  ]
  return (
    <div className='px-20'>
      <h1 className='font-bold text-3xl'>Services </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-6'>
      {
       data.map(d => <div key={d.id}>
        <Link href={`/services/${d.id}`}>
         <img src={d.image} alt="" />
         <p className='font-bold'>{d.name}</p>
        </Link>
       </div>) 
      }
      </div>
    </div>
  )
}

export default Services
