import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="bg-[url('https://img.freepik.com/free-photo/lovely-small-flowers_23-2147760544.jpg?t=st=1714328815~exp=1714332415~hmac=7763b6ce0e6af567033ffa5982ab2b6bb3d0a9fc338b280a11c74f9bde222c94&w=900')] 
    min-h-screen object-cover">
      <h1 className=' font-madimi text-center text-violet-700'>Authentication</h1>
      <Outlet/>
    </div>
  )
}

export default AuthLayout