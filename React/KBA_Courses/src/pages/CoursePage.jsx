import React from 'react'
// import Navbar from '../components/Navbar'
import banner_kba from '../assets/images/banner-kba.png' 
import MainLayout from '../layouts/MainLayout'
import { useParams, Link } from 'react-router-dom'
import coursesData from '../data/courses.json'
import NotFound from '../pages/NotFound'
import UpdateCourse from './UpdateCourse'

const CoursePage = () => {
  
  const {id} = useParams();
  // console.log("Selected course id: ",id);
  
  const Course = coursesData.find((course) => course.courseId === id)
  if(!Course){
    return(
      <MainLayout>

        <NotFound />
      </MainLayout>
    )
  
  }

  return (

    <MainLayout>

<div className="bg-white text-gray-900 mb-10 pb-10">
        <div className="max-w-4xl mx-auto p-5 ">

          <section>
            <Link to='/courses' className="flex items-center my-5 gap-1 font-medium  ">  Back to Courses</Link>
          </section>

          <div className="bg-purple-100 shadow-lg rounded-lg overflow-hidden">
            <img
              src={banner_kba}
              alt="Course Thumbnail"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h1 className="text-3xl font-bold text-purple-800">
                  {Course.title}
                </h1>
                <div className="flex items-center mt-2 sm:mt-0">
                  <span className="text-2xl text-red-500 font-semibold mr-4">
                    {Course.price}
                  </span>
                  <button className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-purple-800 mb-2">
                  Description
                </h2>
                <p>{Course.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-purple-800 mb-2">
                  Prerequisites
                </h2>
                <ul className="list-disc list-inside">
                  <li>Basic understanding of blockchain technology</li>
                  <li>Familiarity with programming languages</li>
                  <li>Internet access</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-purple-800 mb-2">
                  Features
                </h2>
                <ul className="list-disc list-inside">
                  <li>40 hours of content</li>
                  <li>Certificate of completion</li>
                  <li>Access to community forums</li>
                  <li>Downloadable resources</li>
                  <li>24/7 support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end gap-4 mr-[205px] ">
          <Link to={`/editcourse/${Course.courseId}`}className="flex bg-blue-500 hover:bg-blue-600 text-white font-bold  rounded-full h-10 w-32 focus:outline-none focus:shadow-outline justify-center items-center">Edit Course</Link>
          <a className="flex bg-red-500 hover:bg-red-600 text-white font-bold  rounded-full h-10 w-32 focus:outline-none focus:shadow-outline  justify-center items-center">Remove Course</a>

        </div>
      </div>

    </MainLayout>
  )
}

export default CoursePage
