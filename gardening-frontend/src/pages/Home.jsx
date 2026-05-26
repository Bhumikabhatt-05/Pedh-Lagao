import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import FeaturedData from '../components/FeaturedData'
import Properties from '../components/Properties'
import Newsletter from '../components/Newsletter'
const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Category />
      <FeaturedData />
      <Properties />
      <Newsletter />
    </div>
  )
}

export default Home
