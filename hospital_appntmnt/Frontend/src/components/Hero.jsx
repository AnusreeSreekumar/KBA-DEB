import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='mt-28 text-center'>
      <h1 className='text-3xl text-purple-800 font-semibold mb-10'>Welcome to the Hospital Appointment System</h1>
      <p className='text-lg mb-6 text-purple-600'>Easily book your hospital appointments in just few clicks</p>
      <Link to='/addbooking' className='w-60 h-14 bg-slate-300 rounded-md hover:bg-slate-400'>Book Appointment Now</Link>
    </div>
  )
}

export default Hero
