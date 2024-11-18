import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AddCourse from './pages/AddCourse'
import Contact from './pages/Contact'
import CoursePage from './pages/CoursePage'
import NotFound from './pages/NotFound'
import UpdateCourse from './pages/UpdateCourse'
import Courses from './pages/Courses'
import DeleteCourse from './pages/DeleteCourse'
import { SignupPage } from './pages/Signup Page'

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Home Pages */}
        <Route path='/' element={<Home />} />

        {/* Courses Page */}
        <Route path='/courses' element={<Courses />} />

        {/* Contact Page */}
        <Route path='/contact' element={<Contact />} />

        {/*Add Course Page */}
        <Route path='/addcourse' element={<AddCourse />} />

        {/* Course Details Page */}
        <Route path='/course/:id' element={<CoursePage />} />

        {/* Update Course Page */}
        <Route path='/editcourse/:id' element={<UpdateCourse />} />

        {/* Not Found Page */}
        <Route path='*' element={<NotFound />} />

        {/* Delete Course Page */}
        <Route path='/deletecourse/:id'element={<DeleteCourse />} />

      </Routes>
    </Router>
  )
}

export default App
