import React from 'react'
import delivery from '../assets/delivery-truck.png'
import planting from '../assets/planting.png'
import security from '../assets/security.png'
const Properties = () => {
  return (
    <div className='mt-20 h-[25%] flex justify-center items-center gap-40 bg-green-600'>
      <div className=' h-52 w-52 flex flex-col justify-center items-center'>
                 <div className='mb-4 bg-green-400  p-3 rounded-full'> <img  className='h-10 ' src={delivery} alt="" /></div>
                  <p className='text-xl font-semibold text-white'>Free Shipping</p>
                  <p className='text-normal text-white'>Over $50 order</p>
        </div>
        <div className=' h-52 w-52 flex flex-col justify-center items-center'>
                 <div className='mb-4 bg-green-400  p-3 rounded-full'> <img  className='h-10' src={security} alt="" /></div>
                  <p className='text-xl font-semibold text-white'>Quality Gurantee</p>
                  <p className='text-normal text-white'>100% quality proof</p>
        </div>
        <div className=' h-52 w-52 flex flex-col justify-center items-center'>
                 <div className='mb-4 bg-green-400  p-3 rounded-full'> <img  className='h-10 ' src={planting} alt="" /></div>
                  <p className='text-xl font-semibold text-white'>Eco-Friendly</p>
                  <p className='text-normal text-white'>Sustainable Products</p>
        </div>
    </div>
  )
}

export default Properties
