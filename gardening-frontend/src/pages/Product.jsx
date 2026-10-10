import React, { useContext } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Product = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const { products, currency, addToCart } = useContext(ShopContext);

  // Products are still being fetched from the backend
  if (products.length === 0) {
    return (
      <div className='min-h-screen flex justify-center items-center text-2xl text-gray-500'>
        Loading...
      </div>
    )
  }

  const product = products.find(
    (item) => String(item.id) === id
  );

  if (!product) {
    return (
      <div className='min-h-screen flex flex-col gap-6 justify-center items-center'>
        <p className='text-4xl font-bold text-gray-800'>Product Not Found</p>
        <Link
          to='/collection'
          className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition'
        >
          Back to Collection
        </Link>
      </div>
    )
  }

  const uses = Array.isArray(product.uses)
    ? product.uses
    : product.uses
    ? [product.uses]
    : []

  return (

    <div className='min-h-screen px-6 md:px-20 py-12 bg-gradient-to-b from-green-50/60 to-white'>

      {/* Breadcrumb */}
      <div className='text-sm text-gray-500 mb-8 flex items-center gap-2'>
        <Link to='/' className='hover:text-green-700 transition'>Home</Link>
        <span>/</span>
        <Link to='/collection' className='hover:text-green-700 transition'>Collection</Link>
        <span>/</span>
        <span className='text-gray-800 font-medium'>{product.name}</span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start'>

        {/* Image */}
        <div className='relative overflow-hidden rounded-3xl shadow-2xl bg-green-50 group'>

          <img
            className='w-full h-[500px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700'
            src={product.image}
            alt={product.name}
          />

          {product.category && (
            <span className='absolute top-5 left-5 bg-white/90 backdrop-blur text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full shadow'>
              {product.category}
            </span>
          )}

        </div>

        {/* Details */}
        <div className='flex flex-col gap-6'>

          <h1 className='text-4xl md:text-5xl font-bold text-green-900 leading-tight'>
            {product.name}
          </h1>

          <div className='flex items-center gap-4'>
            <p className='text-4xl font-bold text-green-700'>
              {currency}{product.price}
            </p>
            <span className='bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full'>
              In Stock
            </span>
          </div>

          <hr className='border-gray-200' />

          <p className='text-lg text-gray-600 leading-8'>
            {product.description}
          </p>

          {/* Uses */}
          {uses.length > 0 && (
            <div>
              <h3 className='text-lg font-semibold text-gray-800 mb-3'>Uses</h3>
              <div className='flex flex-wrap gap-2'>
                {uses.map((use, i) => (
                  <span
                    key={i}
                    className='bg-green-50 border border-green-200 text-green-800 text-sm px-4 py-1.5 rounded-full'
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Perks */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
            {[
              { icon: '🌱', text: 'Fresh & Healthy' },
              { icon: '🚚', text: 'Fast Delivery' },
              { icon: '♻️', text: 'Eco Packaging' },
            ].map((perk) => (
              <div
                key={perk.text}
                className='flex flex-col items-center text-center gap-1 bg-white border border-gray-100 shadow-sm rounded-2xl py-4 px-2'
              >
                <span className='text-2xl'>{perk.icon}</span>
                <span className='text-sm font-medium text-gray-700'>{perk.text}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 mt-2'>

            <button
              onClick={() => {
                addToCart(product);
              }}
              className='flex-1 bg-green-600 hover:bg-green-700 active:scale-95 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all'
            >
              Add To Cart
            </button>

            <button
              onClick={() => {
                addToCart(product);
                navigate('/placeorder');
              }}
              className='flex-1 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white active:scale-95 px-8 py-4 rounded-2xl text-lg font-semibold transition-all'
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