import React, { useContext, useState } from 'react'
import axios from 'axios'
import { ShopContext } from '../context/ShopContext'
import { useEffect } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const { setToken, token ,backendUrl, navigate } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password
        })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          setError(response.data.message)
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', {
          email,
          password
        })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          setError(response.data.message)
        }
      }
    } catch (err) {
      console.log(err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className='min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden'>

      {/* Background decoration */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2' />
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3' />

      <div className='w-full max-w-md relative z-10'>

        {/* Logo / Brand */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center gap-2 mb-3'>
            <span className='text-4xl'>🌱</span>
            <span className='text-2xl font-bold text-green-800 tracking-wide'>Pedh Lagao</span>
          </div>
          <h1 className='text-3xl font-bold text-gray-800'>
            {currentState === 'Login' ? 'Welcome back' : 'Create account'}
          </h1>
          <p className='text-gray-500 mt-1'>
            {currentState === 'Login'
              ? 'Sign in to continue shopping'
              : 'Join us and grow something beautiful'}
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={onSubmitHandler}
          className='bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col gap-5'
        >

          {/* Name (Sign Up only) */}
          {currentState === 'Sign Up' && (
            <div className='flex flex-col gap-1'>
              <label className='text-sm font-semibold text-gray-600'>Full Name</label>
              <input
                type='text'
                placeholder='Your full name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className='border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition text-gray-800'
              />
            </div>
          )}

          {/* Email */}
          <div className='flex flex-col gap-1'>
            <label className='text-sm font-semibold text-gray-600'>Email Address</label>
            <input
              type='email'
              placeholder='you@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition text-gray-800'
            />
          </div>

          {/* Password */}
          <div className='flex flex-col gap-1'>
            <label className='text-sm font-semibold text-gray-600'>Password</label>
            <input
              type='password'
              placeholder={currentState === 'Sign Up' ? 'Min. 8 characters' : 'Your password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition text-gray-800'
            />
          </div>

          {/* Forgot Password */}
          {currentState === 'Login' && (
            <p className='text-right text-sm text-green-600 cursor-pointer hover:underline -mt-2'>
              Forgot password?
            </p>
          )}

          {/* Error message */}
          {error && (
            <div className='bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3'>
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type='submit'
            disabled={loading}
            className='bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3.5 rounded-2xl text-lg font-semibold transition duration-200 shadow-md hover:shadow-lg mt-1'
          >
            {loading
              ? 'Please wait...'
              : currentState === 'Login'
                ? 'Sign In'
                : 'Create Account'}
          </button>

          {/* Toggle */}
          <p className='text-center text-gray-500 text-sm'>
            {currentState === 'Login'
              ? "Don't have an account?"
              : 'Already have an account?'}
            <span
              onClick={() => {
                setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')
                setError('')
              }}
              className='text-green-600 font-semibold cursor-pointer ml-1 hover:underline'
            >
              {currentState === 'Login' ? 'Sign Up' : 'Sign In'}
            </span>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Login
