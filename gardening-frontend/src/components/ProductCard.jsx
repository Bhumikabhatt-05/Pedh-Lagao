import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductCard = (props) => {

  const { addToCart } = useContext(ShopContext);

  return (

    <Link
      className='cursor-pointer'
      to={`/product/${props.product.id}`}
    >

      <div className='font-sans min-h-105 w-64 rounded-2xl shadow-2xl flex flex-col overflow-hidden bg-white'>

        <img
          className='h-80 hover:scale-110 transition duration-300 object-cover'
          src={props.product.image}
          alt=""
        />

        <div className='flex flex-col py-3 px-3 gap-3'>

          <p className='text-xl font-semibold'>
            {props.product.name}
          </p>

          <div className='flex justify-between items-center'>

            <p className='text-2xl text-green-600 font-semibold'>
              ${props.product.price}
            </p>

            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(props.product);
              }}
              className='bg-green-500 hover:bg-green-600 px-3 py-2 rounded-2xl text-white transition'
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </Link>

  )
}

export default ProductCard