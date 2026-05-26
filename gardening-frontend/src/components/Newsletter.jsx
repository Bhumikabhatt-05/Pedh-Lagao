import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col justify-center items-center p-8'>
      <h1 className='text-3xl font-bold '>Join Our Garden Community</h1>
      <p className='text-normal text-gray-400 mb-5'>Get gardening tips, exclusive offers, and seasonal recommendations delivered to your inbox.</p>
        <form >
            <input className='border-2 border-gray-500 p-2 ' type="email" placeholder='Enter your Email' required />
            <button  className=' p-2  bg-green-600'type='Submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter
