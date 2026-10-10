import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductCard from './ProductCard'

const FeaturedData = () => {
  const { products } = useContext(ShopContext)

  // derived on every render, so it updates when products finish loading
  const featured = products.slice(0, 4)

  return (
    <div className='h-[80vh] flex flex-col tracking-wider justify-center items-center'>
      <h1 className='text-4xl font-bold mb-10'>Featured Products</h1>

      <div className='flex gap-15 flex-wrap justify-center'>
        {featured.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedData