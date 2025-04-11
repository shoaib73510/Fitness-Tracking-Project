import React from 'react'
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Dashboard from './Dashboard'
import Userdata from './Userdata'
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Navbar from './Navbar'





function App() {
  return (
    <>
    <Router basename="/Fitness-Tracking-Project">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/userdata' element={<Userdata/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App