import React from 'react'
import Courses from '../pages/Courses'
import { Link } from 'react-router-dom'

const ViewAllCoursesBtn = () => {
  return (
    <div className='flex justify-center mb-40'>
        <Link to='/courses' className='w-80 h-10 rounded-full bg-purple-500 text-white font-medium  hover:bg-purple-600 text-center pt-2'>View all Courses</Link>
    </div>
  )
}

export default ViewAllCoursesBtn
