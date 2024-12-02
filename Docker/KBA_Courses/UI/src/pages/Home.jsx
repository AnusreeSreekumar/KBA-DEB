import React from 'react'
import Hero from '../components/Hero'
import TopCourses from '../components/TopCourses'
import CourseGrid from '../components/CourseGrid'
import ViewAllCoursesBtn from '../components/ViewAllCoursesBtn'

const Home = () => {

  return (
    <>
      <Hero />
      <TopCourses />
      <CourseGrid isHome={true} />
      <ViewAllCoursesBtn />
    </>
  )
}

export default Home
