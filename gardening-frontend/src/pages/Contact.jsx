import React from 'react'

const Contact = () => {
  return (

    <div className='min-h-screen px-6 md:px-20 py-16 font-sans'>

      {/* Heading */}
      <div className='text-center mb-16'>

        <h1 className='text-5xl md:text-6xl font-black text-green-900 mb-6'>
          Contact Us
        </h1>

        <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-8'>
          We'd love to hear from you. Whether you have questions about plants,
          orders, delivery, or gardening tips — our team is here to help.
        </p>

      </div>

      {/* Main Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>

        {/* Contact Info */}
        <div>

          <h2 className='text-4xl font-bold text-green-800 mb-8'>
            Get In Touch
          </h2>

          <div className='flex flex-col gap-8'>

            <div className='shadow-lg rounded-2xl p-6'>

              <h3 className='text-2xl font-semibold mb-3'>
                📍 Address
              </h3>

              <p className='text-gray-600 leading-7'>
                Pedh Lagao Nursery <br />
                Ghaziabad, Uttar Pradesh, India
              </p>

            </div>

            <div className='shadow-lg rounded-2xl p-6'>

              <h3 className='text-2xl font-semibold mb-3'>
                📞 Phone
              </h3>

              <p className='text-gray-600'>
                +91 9876543210
              </p>

            </div>

            <div className='shadow-lg rounded-2xl p-6'>

              <h3 className='text-2xl font-semibold mb-3'>
                📧 Email
              </h3>

              <p className='text-gray-600'>
                support@pedhlagao.com
              </p>

            </div>

          </div>

        </div>

        {/* Contact Form */}
        <div className='shadow-2xl rounded-3xl p-8'>

          <h2 className='text-4xl font-bold text-green-800 mb-8'>
            Send Message
          </h2>

          <form className='flex flex-col gap-6'>

            <input
              type="text"
              placeholder='Your Name'
              className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600'
            />

            <input
              type="email"
              placeholder='Your Email'
              className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600'
            />

            <input
              type="text"
              placeholder='Subject'
              className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600'
            />

            <textarea
              rows="6"
              placeholder='Your Message'
              className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600 resize-none'
            ></textarea>

            <button
              className='bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-semibold transition'
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Contact