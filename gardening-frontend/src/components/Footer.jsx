import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=' bg-green-950 text-white mt-20'>

      <div className='max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10'>

        
        <div>
          <h1 className='text-3xl font-black text-green-400 mb-4'>
            Pedh Lagao
          </h1>

          <p className='text-gray-300 leading-7'>
            Bring nature closer to your home with beautiful indoor and outdoor
            plants. Fresh plants, fast delivery, and eco-friendly gardening
            solutions.
          </p>
        </div>

        
        <div>
          <h2 className='text-2xl font-semibold mb-4'>
            Quick Links
          </h2>

          <div className='flex flex-col gap-3 text-gray-300'>
            <Link className='hover:text-green-400 transition' to='/'>
              Home
            </Link>

            <Link className='hover:text-green-400 transition' to='/collection'>
              Collection
            </Link>

            <Link className='hover:text-green-400 transition' to='/about'>
              About
            </Link>

            <Link className='hover:text-green-400 transition' to='/contact'>
              Contact
            </Link>
          </div>
        </div>

       
        <div>
          <h2 className='text-2xl font-semibold mb-4'>
            Contact Us
          </h2>

          <div className='flex flex-col gap-3 text-gray-300'>
            <p>Email: support@pedhlagao.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Ghaziabad, Uttar Pradesh</p>
          </div>
        </div>
          
        </div>
      
      <div className='border-t border-green-800 py-4 text-center text-gray-400 text-sm'>
        © 2026 Pedh Lagao. All Rights Reserved.
      </div>
      

    </footer>
  )
}

export default Footer