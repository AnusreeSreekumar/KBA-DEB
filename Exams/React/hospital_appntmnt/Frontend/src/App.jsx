import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import AddBooking from './pages/AddBooking'
import ViewBooking from './pages/ViewBooking';
import Navbar from './components/Navbar';
import Signup from './pages/Signup'
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      {/* Public Route */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/addbooking' element={<AddBooking />} />
        <Route path='/viewbooking' element={<ViewBooking />} />
      </Routes>
    </Router>
  )
}

export default App
