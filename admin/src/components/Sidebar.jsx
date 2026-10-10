import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (

    <div className='min-h-screen w-52 border-r border-gray-300 bg-white px-6 py-10'>

      {/* Navigation */}
      <div className='flex flex-col gap-5'>

        {/* Add Items */}
        <NavLink

          to='/add'

          className={({ isActive }) =>
            `px-5 py-4 rounded-2xl text-lg font-semibold transition
            ${
              isActive
                ? 'bg-green-600 text-white'
                : 'hover:bg-green-100 text-gray-700'
            }`
          }
        >

          ➕ Add Items

        </NavLink>
          <hr />
        {/* List Items */}
        <NavLink

          to='/list'

          className={({ isActive }) =>
            `px-5 py-4 rounded-2xl text-lg font-semibold transition
            ${
              isActive
                ? 'bg-green-600 text-white'
                : 'hover:bg-green-100 text-gray-700'
            }`
          }
        >

          📦 List Items

        </NavLink>
        <hr />

        {/* Orders */}
        {/* <NavLink

          to='/orders'

          className={({ isActive }) =>
            `px-5 py-4 rounded-2xl text-lg font-semibold transition
            ${
              isActive
                ? 'bg-green-600 text-white'
                : 'hover:bg-green-100 text-gray-700'
            }`
          }
        >

          🛒 Orders

        </NavLink> */}

            {/* <hr /> */}
      </div>

    </div>

  )
}

export default Sidebar