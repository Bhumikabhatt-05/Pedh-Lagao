
import React from 'react'
import { Link } from 'react-router-dom'




const Success = () => {
   
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 sm:p-12 text-center border border-green-100">

        {/* Success Icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <span className="text-5xl">🌱</span>
        </div>

        {/* Heading */}
        <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3">
          Pedh Lagao
        </p>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Payment Successful!
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8">
          Yay! Your order is confirmed. Thank you for choosing green living.
          Together, let's make the world a little greener. 🌍
        </p>

        {/* Order Status */}
        <div className="bg-green-50 rounded-2xl p-5 mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white">
              ✓
            </span>
            <div>
              <p className="font-semibold text-gray-800">Payment completed</p>
              <p className="text-sm text-gray-500">Your payment was successful.</p>
            </div>
          </div>

          <div className="h-px bg-green-200 mb-4" />

          <div className="flex items-center gap-3">
            <span className="text-2xl">📦</span>
            <div>
              <p className="font-semibold text-gray-800">Getting ready to grow</p>
              <p className="text-sm text-gray-500">
                Your green journey starts here!
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="flex-1 rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white shadow-md transition hover:bg-green-700 hover:shadow-lg"
          >
            Continue Shopping
          </Link>

          <Link
            to="/order"
            className="flex-1 rounded-xl border-2 border-green-600 px-6 py-3.5 font-semibold text-green-700 transition hover:bg-green-50"
          >
            View My Orders
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Thank you for helping our planet breathe. 💚
        </p>

      </div>
    </div>
  )
}

export default Success