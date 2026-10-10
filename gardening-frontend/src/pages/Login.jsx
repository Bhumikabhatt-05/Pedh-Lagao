import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const { setToken, token, backendUrl, navigate } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const isSignUp = currentState === 'Sign Up'

      const response = isSignUp
        ? await axios.post(backendUrl + '/api/user/register', { name, email, password })
        : await axios.post(backendUrl + '/api/user/login', { email, password })

      if (response.data.success) {
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
        toast.success(isSignUp ? 'Account created successfully' : 'Logged in successfully')
      } else {
        setError(response.data.message)
        toast.error(response.data.message)
      }
    } catch (err) {
      console.log(err)
      const message =
        err.response?.data?.message || err.message || 'Something went wrong. Please try again.'
      setError(message)
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  // After login or sign up, go straight to the cart
  useEffect(() => {
    if (token) {
      navigate('/cart')
    }
  }, [token])

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

          {/* Password with eye */}
          <div className='flex flex-col gap-1'>
            <label className='text-sm font-semibold text-gray-600'>Password</label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder={currentState === 'Sign Up' ? 'Min. 8 characters' : 'Your password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='w-full border border-gray-200 rounded-xl pl-4 pr-12 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition text-gray-800'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600 transition'
              >
                {showPassword ? (
                  /* eye-off */
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21' />
                  </svg>
                ) : (
                  /* eye */
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                  </svg>
                )}
              </button>
            </div>
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