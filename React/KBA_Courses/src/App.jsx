import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AddCourse from './pages/AddCourse'
import Contact from './pages/Contact'
import CoursePage from './pages/CoursePage'
import EditCourse from './pages/UpdateCourse'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Home Pages */}
        <Route path='/' element={<Home />} />

        {/* Courses Page */}

        <Route path='/courses' element={<CoursePage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/addcourse' element={<AddCourse />} />
        <Route path='/editcourse' element={<EditCourse />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/courses/:id' element={<CoursePage />} />
      </Routes>
    </Router>
  )
}

export default App
