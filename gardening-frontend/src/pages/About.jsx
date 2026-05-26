import React from 'react'

const About = () => {
  return (

    <div className='min-h-screen px-6 md:px-20 py-16 font-sans'>

      {/* Hero Section */}
      <div className='flex flex-col items-center text-center mb-20'>

        <h1 className='text-5xl md:text-6xl font-black text-green-900 mb-6'>
          About Pedh Lagao
        </h1>

        <p className='max-w-3xl text-lg text-gray-600 leading-8'>
          At Pedh Lagao, we believe plants are more than decoration —
          they bring life, freshness, positivity, and peace into every home.
          Our mission is to make gardening simple, affordable, and enjoyable
          for everyone.
        </p>

      </div>

      {/* Story Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24'>

        <div>
          <img
            className='rounded-3xl shadow-2xl object-cover h-[500] w-full'
            src='https://images.unsplash.com/photo-1416879595882-3373a0480b5b'
            alt=""
          />
        </div>

        <div>

          <h2 className='text-4xl font-bold text-green-800 mb-6'>
            Our Story
          </h2>

          <p className='text-gray-600 leading-8 mb-5'>
            Pedh Lagao started with a simple goal — to reconnect people
            with nature in modern urban lifestyles. We noticed that many
            people wanted plants in their homes but struggled to find
            healthy plants and proper gardening guidance.
          </p>

          <p className='text-gray-600 leading-8'>
            Today, we provide carefully selected indoor plants,
            outdoor plants, pots, gardening tools, and eco-friendly
            accessories to thousands of plant lovers.
          </p>

        </div>

      </div>

      {/* Features */}
      <div className='mb-24'>

        <h2 className='text-4xl font-bold text-center text-green-900 mb-14'>
          Why Choose Us
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

          <div className='shadow-xl rounded-3xl p-8 text-center hover:scale-105 transition'>

            <div className='text-5xl mb-5'>
              🌱
            </div>

            <h3 className='text-2xl font-bold mb-4'>
              Fresh Plants
            </h3>

            <p className='text-gray-600 leading-7'>
              We deliver healthy and fresh plants directly from trusted nurseries.
            </p>

          </div>

          <div className='shadow-xl rounded-3xl p-8 text-center hover:scale-105 transition'>

            <div className='text-5xl mb-5'>
              🚚
            </div>

            <h3 className='text-2xl font-bold mb-4'>
              Fast Delivery
            </h3>

            <p className='text-gray-600 leading-7'>
              Safe packaging and quick delivery to keep your plants protected.
            </p>

          </div>

          <div className='shadow-xl rounded-3xl p-8 text-center hover:scale-105 transition'>

            <div className='text-5xl mb-5'>
              ♻️
            </div>

            <h3 className='text-2xl font-bold mb-4'>
              Eco Friendly
            </h3>

            <p className='text-gray-600 leading-7'>
              We promote sustainable gardening and environmentally friendly products.
            </p>

          </div>

        </div>

      </div>

      {/* Mission */}
      <div className='bg-green-100 rounded-3xl p-10 md:p-16 text-center'>

        <h2 className='text-4xl font-bold text-green-900 mb-6'>
          Our Mission
        </h2>

        <p className='max-w-4xl mx-auto text-lg text-gray-700 leading-9'>
          Our mission is to inspire people to create greener homes,
          healthier lifestyles, and a cleaner environment through gardening.
          Every plant you buy helps us move one step closer to a greener planet.
        </p>

      </div>

    </div>
  )
}

export default About