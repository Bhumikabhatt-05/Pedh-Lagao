import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const statusStyle = {
  'Order Placed': 'bg-blue-100 text-blue-700',
  Packing: 'bg-yellow-100 text-yellow-700',
  Shipped: 'bg-purple-100 text-purple-700',
  'Out for delivery': 'bg-orange-100 text-orange-700',
  Delivered: 'bg-green-100 text-green-700',
}

const Order = () => {
  const { backendUrl, token, currency } = useContext(ShopContext)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  const loadOrders = async () => {
    if (!token) {
      setLoading(false)
      return
    }
    try {
      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      )
      if (response.data.success) {
        setOrders([...response.data.orders].reverse()) // newest first
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadOrders()
  }, [token])

  if (loading) {
    return (
      <div className='min-h-screen flex justify-center items-center text-2xl text-gray-500'>
        Loading your orders...
      </div>
    )
  }

  if (!token) {
    return (
      <div className='min-h-screen flex flex-col gap-6 justify-center items-center'>
        <p className='text-3xl font-bold text-gray-800'>Please log in to see your orders</p>
        <Link to='/login' className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition'>
          Go to Login
        </Link>
      </div>
    )
  }

  if (orders.length === 0) {
    return (
      <div className='min-h-screen flex flex-col gap-6 justify-center items-center'>
        <span className='text-6xl'>🪴</span>
        <p className='text-3xl font-bold text-gray-800'>No orders yet</p>
        <Link to='/collection' className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition'>
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className='min-h-screen px-6 md:px-20 py-12 bg-linear-to-b from-green-50/60 to-white'>
      <h1 className='text-4xl font-bold text-green-900 mb-10'>My Orders</h1>

      <div className='flex flex-col gap-8 max-w-4xl'>
        {orders.map((order) => (
          <div key={order._id} className='bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden'>

            {/* Header */}
            <div className='flex flex-wrap justify-between items-center gap-3 bg-green-50 px-6 py-4 border-b border-green-100'>
              <div>
                <p className='text-xs text-gray-500'>Order ID</p>
                <p className='text-sm font-semibold text-gray-800 break-all'>{order._id}</p>
              </div>
              <div>
                <p className='text-xs text-gray-500'>Placed on</p>
                <p className='text-sm font-semibold text-gray-800'>
                  {new Date(order.date).toDateString()}
                </p>
              </div>
              <span className={`px-4 py-1 rounded-full text-sm font-medium ${statusStyle[order.status] || 'bg-gray-100 text-gray-700'}`}>
                {order.status}
              </span>
            </div>

            {/* Items */}
            <div className='divide-y divide-gray-100'>
              {order.items.map((item, index) => (
                <div key={index} className='flex items-center gap-5 px-6 py-4'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-20 h-20 rounded-xl object-cover bg-green-50'
                  />
                  <div className='flex-1'>
                    <p className='font-semibold text-gray-800'>{item.name}</p>
                    <p className='text-sm text-gray-500'>
                      {currency}{item.price} x {item.quantity}
                    </p>
                  </div>
                  <p className='font-semibold text-green-700'>
                    {currency}{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className='flex flex-wrap justify-between items-center gap-3 px-6 py-4 bg-gray-50 border-t border-gray-100'>
              <p className='text-sm text-gray-600'>
                Payment: <span className='font-medium'>{order.paymentMethod}</span> ({order.payment ? 'Paid' : 'Pending'})
              </p>
              <div className='flex items-center gap-4'>
                <p className='text-lg font-bold text-green-800'>
                  Total: {currency}{order.amount}
                </p>
                <button
                  onClick={loadOrders}
                  className='border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-4 py-1.5 rounded-full text-sm font-medium transition'
                >
                  Track Order
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Order