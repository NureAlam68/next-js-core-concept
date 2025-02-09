import React from 'react'

const ContactSlug = async ({params}) => {
    const p = await params;
    console.log(p)
  return (
    <div>
      <h1>Contact Slug</h1>
    </div>
  )
}

export default ContactSlug
