import React, { useState,useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { ShopContext } from '../context/ShopContext'

const Collection = () => {
  const {products} =useContext(ShopContext)
  const [search, setSearch] = useState('')

  // Filter Products
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div className='min-h-screen px-6 py-10'>

      {/* Heading */}
      <div className='flex flex-col items-center mb-10'>

        <h1 className='text-5xl font-bold text-green-900 mb-4'>
          Our Collection
        </h1>

        <p className='text-gray-600 text-lg'>
          Explore all plants and gardening products
        </p>

      </div>

      {/* Search Bar */}
      <div className='flex justify-center mb-12'>

        <input
          type="text"
          placeholder='Search plants...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full md:w-125 border border-gray-300 rounded-2xl px-5 py-3 outline-none focus:border-green-600 text-lg'
        />

      </div>

      {/* Products */}
      <div className='flex justify-center gap-10 flex-wrap'>

        {
          filteredProducts.length > 0 ? (

            filteredProducts.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))

          ) : (

            <p className='text-2xl text-gray-500'>
              No Products Found
            </p>

          )
        }

      </div>

    </div>
  )
}

export default Collection