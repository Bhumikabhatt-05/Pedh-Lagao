import React from 'react'
import frontphoto from '../assets/frontPhoto.jpg'
const Hero = () => {
  return (
    <div className='bg-green-100 h-[80vh] flex items-center gap-10 px-20 '>
      <div className=' flex  flex-col items-start justify-center h-100 w-180 leading-relaxed'>
        <h1 className='tracing-wider text-6xl font-bold px-2 pt-15 pb-5'>Grow Your Green Paradise</h1>
        <h3 className='tracing-wider text-2xl font-medium px-2 text-gray-500'>Everything you need to create and maintain a beautiful garden.</h3>
        <h3 className='tracing-wider text-2xl font-medium px-2 mb-4 text-gray-500'>From seeds to tools, we've got you covered.</h3>
        <button className='bg-green-500 hover:bg-green-600 p-3 text-xl rounded-2xl text-white'>Shop Now</button>
      </div>
      <div>
        <img className='h-100 rounded-4xl font-bold shadow-2xl' src={frontphoto} alt="" />
      </div>
    </div>
  )
}

export default Hero
