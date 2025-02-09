import React from 'react'

const ServiceDetails = ({params}) => {
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

    const id = params.id;
    const singleData = data.find(d => d.id == id)

    if(singleData) {
      return (
        <div className='px-20'>
          <h1>Service Details</h1>
          <p>ID: {id}</p>
          <div className='mt-10'>
            <img src={singleData.image} alt="" />
            <h3 className='font-bold py-4'>{singleData.name}</h3>
            <p>{singleData.description}</p>
          </div>
        </div>
      )
    }
    else {
      return (
        <>
        <p className='text-red-600'>SERVICE NOT FOUND...</p>
      </>
      )
    }
 
}

export default ServiceDetails
