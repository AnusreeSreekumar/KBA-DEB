import React from 'react'
import Hero from '../components/Hero'
import TopCourses from '../components/TopCourses'
import CourseGrid from '../components/CourseGrid'
import ViewAllCoursesBtn from '../components/ViewAllCoursesBtn'
import MainLayout from '../layouts/MainLayout'

const Home = () => {
  
    return (
        <MainLayout>
          <Hero />
          <TopCourses />
          <CourseGrid  isHome={true}/>
          <ViewAllCoursesBtn />
        </MainLayout>
    )
}

export default Home
