import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Product = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const { products, currency, addToCart } = useContext(ShopContext);

  // Find Product
  const product = products.find(
    (item) => item.id.toString() === id
  );

  // Product Not Found
  if (!product) {
    return (
      <div className='min-h-screen flex justify-center items-center text-4xl font-bold'>
        Product Not Found
      </div>
    )
  }

  return (

    <div className='min-h-screen px-6 md:px-20 py-16'>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>

        {/* Image */}
        <div className='overflow-hidden rounded-3xl shadow-2xl'>

          <img
            className='w-full h-150 object-cover hover:scale-110 transition duration-500'
            src={product.image}
            alt=""
          />

        </div>

        {/* Details */}
        <div className='flex flex-col gap-6'>

          <h1 className='text-5xl font-bold text-green-900'>
            {product.name}
          </h1>

          <p className='text-2xl text-gray-500'>
            {product.category}
          </p>

          <p className='text-4xl font-bold text-green-700'>
            {currency}{product.price}
          </p>

          <p className='text-lg text-gray-600 leading-8'>
            {product.description}
          </p>

          {/* Features */}
          <div className='flex flex-col gap-3 text-lg text-gray-700'>

            <p>🌱 Fresh & Healthy Plant</p>
            <p>🚚 Fast Delivery Available</p>
            <p>♻️ Eco-Friendly Packaging</p>

          </div>

          {/* Buttons */}
          <div className='flex gap-5 mt-6'>

  {/* Add To Cart */}
  <button

    onClick={() => {
      addToCart(product);
    }}

    className='bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl text-xl font-semibold transition'
  >
    Add To Cart
  </button>

  {/* Buy Now */}
  <button

    onClick={() => {

      addToCart(product);

      navigate('/placeorder');

    }}

    className='border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-2xl text-xl font-semibold transition'
  >
    Buy Now
  </button>

</div>

        </div>

      </div>

    </div>

  )
}

export default Product
