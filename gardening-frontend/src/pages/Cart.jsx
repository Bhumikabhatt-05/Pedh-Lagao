import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'

const Cart = () => {

  const { cartItems, currency, deliveryFees } = useContext(ShopContext);

  // Total Price
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const total = subtotal + deliveryFees;

  return (

    <div className='min-h-screen px-6 md:px-20 py-12'>

      {/* Heading */}
      <h1 className='text-5xl font-bold text-green-900 mb-12'>
        Shopping Cart
      </h1>

      {
        cartItems.length === 0 ? (

          <div className='flex justify-center items-center h-[50vh]'>

            <p className='text-3xl text-gray-500'>
              Your Cart Is Empty
            </p>

          </div>

        ) : (

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>

            {/* Cart Items */}
            <div className='lg:col-span-2 flex flex-col gap-8'>

              {
                cartItems.map((item) => (

                  <div
                    key={item.id}
                    className='flex flex-col md:flex-row items-center justify-between shadow-xl rounded-3xl p-5'
                  >

                    {/* Product */}
                    <div className='flex items-center gap-5'>

                      <img
                        className='h-32 w-32 rounded-2xl object-cover'
                        src={item.image}
                        alt=""
                      />

                      <div>

                        <h2 className='text-3xl font-bold mb-2'>
                          {item.name}
                        </h2>

                        <p className='text-green-700 text-2xl font-semibold'>
                          {currency}{item.price}
                        </p>

                        <p className='text-gray-500 mt-2'>
                          Quantity: {item.quantity}
                        </p>

                      </div>

                    </div>

                    {/* Total */}
                    <div className='text-3xl font-bold text-green-700'>
                      {currency}{item.price * item.quantity}
                    </div>

                  </div>

                ))
              }

            </div>

            {/* Summary */}
            <div className='shadow-2xl rounded-3xl p-8 h-fit'>

              <h2 className='text-4xl font-bold mb-8'>
                Order Summary
              </h2>

              <div className='flex justify-between mb-5 text-xl'>
                <p>Subtotal</p>
                <p>{currency}{subtotal}</p>
              </div>

              <div className='flex justify-between mb-5 text-xl'>
                <p>Delivery Fee</p>
                <p>{currency}{deliveryFees}</p>
              </div>

              <div className='border-t pt-5 flex justify-between text-3xl font-bold'>
                <p>Total</p>
                <p>{currency}{total}</p>
              </div>

              <Link to='/placeorder'>
              <button className='w-full mt-10 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-xl font-semibold transition'>
                Proceed To Checkout
              </button>
              </Link>

            </div>

          </div>

        )
      }

    </div>

  )
}

export default Cart