import React from 'react'
import logo from '../assets/Logophoto.jpg'
const Navbar = ({setToken}) => {
  return (
    <div className='p-3 flex bg-white justify-between items-center border-b border-gray-500'>
      <div className='flex items-center gap-2'>
              <img className='h-10 rounded-full hover:scale-125' src={logo} alt="img" />
              <h1 className='text-4xl font-black text-green-900 font-sans'>Pedh Lagao</h1>
        </div>
      <button onClick={()=>{setToken('')}} className='p-2 bg-green-600 rounded-full text-white '>Log Out</button>
    </div>
  )
}

export default Navbar
