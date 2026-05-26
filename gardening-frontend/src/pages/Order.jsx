import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {

  const { cartItems, currency } = useContext(ShopContext);

  return (

    <div className='min-h-screen px-6 md:px-20 py-12'>

      <h1 className='text-5xl font-bold text-green-900 mb-12'>
        My Orders
      </h1>

      {
        cartItems.length === 0 ? (

          <div className='flex justify-center items-center h-[50vh]'>

            <p className='text-3xl text-gray-500'>
              No Orders Yet
            </p>

          </div>

        ) : (

          <div className='flex flex-col gap-8'>

            {
              cartItems.map((item) => (

                <div
                  key={item.id}
                  className='shadow-xl rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6'
                >

                  {/* Product */}
                  <div className='flex items-center gap-5'>

                    <img
                      className='h-28 w-28 rounded-2xl object-cover'
                      src={item.image}
                      alt=""
                    />

                    <div>

                      <h2 className='text-3xl font-bold'>
                        {item.name}
                      </h2>

                      <p className='text-green-700 text-2xl font-semibold mt-2'>
                        {currency}{item.price}
                      </p>

                      <p className='text-gray-500 mt-2'>
                        Quantity: {item.quantity}
                      </p>

                    </div>

                  </div>

                  {/* Status */}
                  <div className='flex flex-col items-center gap-3'>

                    <p className='text-lg text-green-700 font-semibold'>
                      ● Order Placed
                    </p>

                    <button className='border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-5 py-2 rounded-xl transition'>
                      Track Order
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>
  )
}

export default Orders