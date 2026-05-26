import axios from 'axios';
import React, { useState } from 'react'
import { backendUrl } from '../App';

const AdminLogin = ({setToken}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Submit Handler
  const handleSubmit = async (e) => {

  try {

    e.preventDefault();

    const response = await axios.post(
      backendUrl + '/api/user/admin',
      { email, password }
    );

    if (response.data.success) {

      // Save Token
      setToken(response.data.token)
       setEmail('');
        setPassword('');

      alert('Login Successful');

      console.log(response.data);

    }

    else {

      alert(response.data.message);

    }

  }

  catch (error) {

    console.log(error);

    alert(error.response?.data?.message || 'Something Went Wrong');

  }

};

  return (

    <div className='min-h-screen flex justify-center items-center bg-green-50 px-6'>

      <form
        onSubmit={handleSubmit}
        className='w-full max-w-md bg-white shadow-2xl rounded-3xl p-10 flex flex-col gap-6'
      >

        {/* Heading */}
        <div className='text-center mb-4'>

          <h1 className='text-5xl font-black text-green-800'>
            Admin Login
          </h1>

          <p className='text-gray-500 mt-3'>
            Welcome Back Admin
          </p>

        </div>

        {/* Email */}
        <div className='flex flex-col gap-2'>

          <label className='text-lg font-medium text-gray-700'>
            Email
          </label>

          <input
            type="email"
            placeholder='Enter admin email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600'
            required
          />

        </div>

        {/* Password */}
        <div className='flex flex-col gap-2'>

          <label className='text-lg font-medium text-gray-700'>
            Password
          </label>

          <input
            type="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-green-600'
            required
          />

        </div>

        {/* Login Button */}
        <button
          type="submit"
          className='bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-xl font-semibold transition'
        >
          Login
        </button>

      </form>

    </div>
  )
}

export default AdminLogin