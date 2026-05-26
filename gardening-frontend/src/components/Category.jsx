import React from 'react'
import plant from '../assets/plant.png'
import box from '../assets/box.png'
import tulip from '../assets/tulips.png'
import seed from '../assets/seed.png'
const Category = () => {
  return (
    <div className='h-[50vh] bg-slate-100 flex flex-col tracking-wider justify-center items-center p-5 '>
      <h1 className='text-4xl font-bold mb-10'>Shop By Category</h1>
      <div className='flex items-center gap-30'>
        <div className='shadow-2xl   hover:scale-95 rounded-4xl h-52 w-52 flex flex-col justify-center items-center'>
           <div className='mb-4 bg-yellow-800  p-3 rounded-full'> <img  className='h-15 ' src={seed} alt="" /></div>
            <p className='text-xl font-semibold'>Seeds</p>
        </div>
        <div className='shadow-2xl rounded-4xl  hover:scale-95 h-52 w-52 flex flex-col justify-center items-center'>
           <div className='mb-4 bg-blue-300   p-2 rounded-full'> <img  className='h-15 ' src={box} alt="" /></div>
            <p className='text-xl font-semibold'>Tools</p>
        </div>
        <div className='shadow-2xl rounded-4xl  hover:scale-95 h-52 w-52 flex flex-col justify-center items-center'>
           <div className='mb-4 bg-pink-300   p-2 rounded-full'> <img  className='h-15 ' src={tulip} alt="" /></div>
            <p className='text-xl font-semibold'>Flower</p>
        </div>
        <div className='shadow-2xl rounded-4xl  hover:scale-95 h-52 w-52 flex flex-col justify-center items-center'>
           <div className='mb-4 bg-green-300   p-2 rounded-full'> <img  className='h-15 ' src={plant} alt="" /></div>
            <p className='text-xl font-semibold'>Plant</p>
        </div>
      </div>
    </div>
  )
}

export default Category
