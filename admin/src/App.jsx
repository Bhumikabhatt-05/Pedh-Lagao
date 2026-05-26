import React,{useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'

export const backendUrl= import.meta.env.VITE_BACKEND_URL


const App = () => {
  const [token,setToken]=useState(localStorage.getItem('token')?
  localStorage.getItem('token'):"")

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  return (
    <div className='bg-green-100 min-h-screen'>
      {token===''
      ?<Login setToken={setToken}/>: <>
        <Navbar setToken={setToken}/>
      <div className='flex w-full'>
          <Sidebar />
          <div className='w-[70%]'>
            <Routes>
                <Route path='/' element={<Add token={token} />} />
                <Route path='/add' element={<Add token={token}/>} />
                <Route path='/list' element={<List token={token}/>}/>
                <Route path='/orders' element={<Orders token={token}/>}/>
            </Routes>
          </div>
      </div>
      </>}
    </div>
  )
}

export default App
