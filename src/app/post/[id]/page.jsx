import React from 'react'

export const getSinglePost = async (postId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await res.json();
  return data;
}

const SinglePost = async ({params}) => {
    const promise = await params;
    const singlePost = await getSinglePost(promise.id)
  return (
    <div className='mt-10 px-10'>
      <p className='text-2xl font-bold'>SinglePost: {promise.id}</p>
      <div className='mt-20 border p-5 max-w-2xl bg-black text-gray-300'>
        <p className='font-bold mb-5'>{singlePost.title}</p>
        <p>{singlePost.body}</p>
      </div>
    </div>
  )
}

export default SinglePost
