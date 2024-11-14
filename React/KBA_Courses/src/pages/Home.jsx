import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TopCourses from '../components/TopCourses'
import CourseGrid from '../components/CourseGrid'
import ViewAllCoursesBtn from '../components/ViewAllCoursesBtn'
import coursesData from '../data/courses.json'

const Home = () => {
    const topCourses = coursesData.slice(0,3)
    return (
        <div>
          <Navbar />
          <Hero />
          <TopCourses />
          <CourseGrid  courses={topCourses}/>
          <ViewAllCoursesBtn />
        </div>
    )
}

export default Home
