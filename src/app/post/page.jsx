import Link from 'next/link';
import React from 'react'

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

const Post = async () => {
    const posts = await getPosts();
  return (
    <div className='mt-10 px-8'>
      <h1>Post</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-6'>
        {
            posts.map(post => <div className='border p-2 bg-green-100'>
                <p className='font-bold mb-3'>{post.title}</p>
                <p>{post.body}</p>
                <Link href={`/post/${post.id}`} className='mt-4 underline text-blue-600'>Details</Link>
            </div>)
        }
      </div>
    </div>
  )
}

export default Post
