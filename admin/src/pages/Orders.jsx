import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'

const statuses = ['Order Placed', 'Packing', 'Shipped', 'Out for delivery', 'Delivered']

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchOrders = async () => {
    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders([...response.data.orders].reverse()) // newest first
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (orderId, status) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/status',
        { orderId, status },
        { headers: { token } }
      )
      if (response.data.success) {
        setOrders((prev) => prev.map((o) => (o._id === orderId ? { ...o, status } : o)))
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => { fetchOrders() }, [])

  if (loading) return <p className='text-gray-500'>Loading orders...</p>

  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-3xl font-bold text-green-900'>All Orders ({orders.length})</h2>

      {orders.length === 0 && (
        <div className='bg-white rounded-2xl shadow p-10 text-center text-gray-500'>
          No paid orders yet.
        </div>
      )}

      {orders.map((order) => (
        <div key={order._id} className='bg-white rounded-2xl shadow border border-gray-100 overflow-hidden'>

          {/* Header */}
          <div className='flex flex-wrap justify-between items-center gap-3 bg-green-50 px-6 py-4 border-b border-green-100'>
            <div>
              <p className='text-xs text-gray-500'>Order ID</p>
              <p className='text-sm font-semibold text-gray-800 break-all'>{order._id}</p>
            </div>
            <div>
              <p className='text-xs text-gray-500'>Date</p>
              <p className='text-sm font-semibold text-gray-800'>{new Date(order.date).toLocaleString()}</p>
            </div>
            <div>
              <p className='text-xs text-gray-500'>Total</p>
              <p className='text-lg font-bold text-green-800'>${order.amount}</p>
            </div>

            <select
              value={order.status}
              onChange={(e) => updateStatus(order._id, e.target.value)}
              className='border border-green-300 rounded-xl px-4 py-2 font-medium text-green-800 bg-white outline-none focus:border-green-600'
            >
              {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6'>

            {/* Items */}
            <div className='flex flex-col gap-3'>
              <p className='font-semibold text-gray-700'>Items</p>
              {order.items.map((item, i) => (
                <div key={i} className='flex items-center gap-3'>
                  <img src={item.image} alt='' className='w-14 h-14 rounded-lg object-cover bg-green-50' />
                  <div className='flex-1'>
                    <p className='font-medium text-gray-800'>{item.name}</p>
                    <p className='text-sm text-gray-500'>${item.price} x {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Customer */}
            <div className='text-sm text-gray-600 leading-6'>
              <p className='font-semibold text-gray-700 mb-1'>Delivery details</p>
              <p className='font-medium text-gray-800'>
                {order.address?.firstName} {order.address?.lastName}
              </p>
              <p>{order.address?.street}</p>
              <p>{order.address?.city}, {order.address?.state} {order.address?.zipcode}</p>
              <p>{order.address?.country}</p>
              <p className='mt-1'>📞 {order.address?.phone}</p>
              <p>✉️ {order.address?.email}</p>
              <p className='mt-2'>
                Payment: <span className='font-medium text-green-700'>{order.paymentMethod} (Paid)</span>
              </p>
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}

export default Orders