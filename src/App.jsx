import React from 'react'
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Dashboard'
import Userdata from './Userdata'
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Navbar from './Navbar'




function App() {
  return (
    <>
    <Router>
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