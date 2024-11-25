import React from 'react'
import hsptllogo from '../assets/images/hospitallogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex bg-purple-200 items-center justify-between'>
            <div className="flex items-center">
                <img src={hsptllogo} alt="logo" className="w-12 h-12" />
                <div className='ml-[400px]'>
                    <span className="ml-2 text-2xl text-purple-600 font-semibold">Hospital Appointment Booking</span>
                </div>

            </div>
            <div className='flex space-x-2 mr-8'>
                <Link to='/' className="text-purple-800 font-medium hover:underline">Home</Link>
                <Link to='/addbooking' className="text-purple-800 font-medium hover:underline">Add Booking</Link>
                <Link to='/viewbooking' className="text-purple-800 font-medium hover:underline">View Booking</Link>
            </div>

        </div>
    )
}

export default Navbar
