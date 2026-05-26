import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'
import logo from '../assets/Logophoto.jpg'
import searchIcon from '../assets/search.png'
import cartIcon from '../assets/shopping-cart.png'
import user from '../assets/user.png'
const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className='h-20 flex items-center justify-between px-4 py-2 border-b border-b-gray-400'>
      <Link to='/'>
      <div className='flex items-center gap-2'>
        <img className='h-10 rounded-full hover:scale-125' src={logo} alt="img" />
        <h1 className='text-4xl font-black text-green-900 font-sans'>Pedh Lagao</h1>
      </div>
      </Link>

      <div className='flex items-center gap-4'>
        <Link className='text-xl  font-sans tracking-wide hover:underline hover:scale-95 hover:text-green-600 font-medium' to='/'>HOME</Link>
        <Link className='text-xl  font-sans tracking-wide hover:underline hover:scale-95 hover:text-green-600 font-medium' to='/collection'>COLLECTION</Link>
        <Link className='text-xl  font-sans  tracking-wide hover:underline hover:scale-95 hover:text-green-600 font-medium' to='/about'>ABOUT</Link>
        <Link className='text-xl  font-sans tracking-wide hover:underline hover:scale-95 hover:text-green-600 font-medium' to='/contact'>CONTACT</Link>
      </div>

      <div className='flex items-center gap-2'>
          <Link to='/collection'> <div className=' p-2 rounded-full hover:bg-green-200'>
            <img className='h-5 hover:scale-90'  src={searchIcon} alt="" />
          </div></Link>
         
          <div className=' group relative p-2 rounded-full hover:bg-green-200'>
            <img className='h-5 hover:scale-90'  src={user} alt="" />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-5'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 text-gray-500 bg-slate-100'>
                <Link to='/login'><p className='cursor-pointer hover:text-black'>
                  My Profile
                </p></Link>
                <Link to='/order'><p className='cursor-pointer hover:text-black'>
                  Orders
                </p></Link>
                <p className='cursor-pointer hover:text-black'>
                  LogOut
                </p>


              </div>
            </div>
          </div>
          <div className=' relative p-2 rounded-full hover:bg-green-200'>
            <Link  to='/cart'><img className=' h-5 hover:scale-90'  src={cartIcon} alt="" /></Link>
            <p className='absolute -right-px bottom-1 font-medium  text-[10px] bg-green-700 text-white w-4 h-4 flex justify-center items-center rounded-full'>{cartItems.length}</p>
          </div>
      </div>
      
    </div>
  )
}

export default Navbar
