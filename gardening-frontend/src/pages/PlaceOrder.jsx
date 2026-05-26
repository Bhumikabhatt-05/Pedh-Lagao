import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PlaceOrder = () => {
  const {backendUrl} =useContext(ShopContext)
  const { cartItems, currency, deliveryFees } = useContext(ShopContext);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  // Handle Input
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // Total Price
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const total = subtotal + deliveryFees;

  // Submit
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const stripe = await stripePromise;

    const response = await axios.post(
      `${backendUrl}/api/order/create-checkout-session`,
      {
        products: cartItems
      }
    );

    if (!response.data.id) {
      alert(response.data.message || "Payment session failed");
      return;
    }

    window.location.href = response.data.url

  } catch (error) {
    console.log("PAYMENT ERROR:", error.message);
  }
};

  return (

    <div className='min-h-screen px-6 md:px-20 py-12'>

      <h1 className='text-5xl font-bold text-green-900 mb-12'>
        Place Order
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>

        {/* Delivery Form */}
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-5 shadow-2xl rounded-3xl p-8'
        >

          <h2 className='text-3xl font-bold mb-4'>
            Delivery Information
          </h2>

          {/* Name */}
          <div className='flex flex-col md:flex-row gap-5'>

            <input
              type="text"
              name="firstName"
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
              className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600 w-full'
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
              className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600 w-full'
              required
            />

          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
            className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600'
            required
          />

          {/* Street */}
          <input
            type="text"
            name="street"
            placeholder='Street'
            value={formData.street}
            onChange={handleChange}
            className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600'
            required
          />

          {/* City & State */}
          <div className='flex flex-col md:flex-row gap-5'>

            <input
              type="text"
              name="city"
              placeholder='City'
              value={formData.city}
              onChange={handleChange}
              className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600 w-full'
              required
            />

            <input
              type="text"
              name="state"
              placeholder='State'
              value={formData.state}
              onChange={handleChange}
              className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600 w-full'
              required
            />

          </div>

          {/* Zip & Country */}
          <div className='flex flex-col md:flex-row gap-5'>

            <input
              type="text"
              name="zipcode"
              placeholder='Zip Code'
              value={formData.zipcode}
              onChange={handleChange}
              className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600 w-full'
              required
            />

            <input
              type="text"
              name="country"
              placeholder='Country'
              value={formData.country}
              onChange={handleChange}
              className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600 w-full'
              required
            />

          </div>

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder='Phone Number'
            value={formData.phone}
            onChange={handleChange}
            className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600'
            required
          />

        </form>

        {/* Order Summary */}
        <div className='shadow-2xl rounded-3xl p-8 h-fit'>

          <h2 className='text-4xl font-bold mb-8'>
            Order Summary
          </h2>

          {/* Items */}
          <div className='flex flex-col gap-5 mb-8'>

            {
              cartItems.map((item) => (

                <div
                  key={item._id}
                  className='flex justify-between items-center'
                >

                  <div className='flex items-center gap-4'>

                    <img
                      className='h-16 w-16 rounded-xl object-cover'
                      src={item.image}
                      alt=""
                    />

                    <div>

                      <p className='font-semibold'>
                        {item.name}
                      </p>

                      <p className='text-gray-500'>
                        Qty: {item.quantity}
                      </p>

                    </div>

                  </div>

                  <p className='font-bold text-green-700'>
                    {currency}{item.price * item.quantity}
                  </p>

                </div>

              ))
            }

          </div>

          {/* Price Details */}
          <div className='border-t pt-5 flex flex-col gap-4'>

            <div className='flex justify-between text-lg'>
              <p>Subtotal</p>
              <p>{currency}{subtotal}</p>
            </div>

            <div className='flex justify-between text-lg'>
              <p>Delivery Fee</p>
              <p>{currency}{deliveryFees}</p>
            </div>

            <div className='flex justify-between text-2xl font-bold'>
              <p>Total</p>
              <p>{currency}{total}</p>
            </div>

          </div>

          {/* Payment */}
          <button
  onClick={handleSubmit}
  className='w-full mt-10 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-xl font-semibold transition'
>
  Place Order
</button>

        </div>

      </div>

    </div>

  )
}

export default PlaceOrder