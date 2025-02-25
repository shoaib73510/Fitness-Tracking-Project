import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    
    <nav className='navbar nn style="color: white;"'>

        <a class="n navbar-brand" href="#">
            <img src="https://static.vecteezy.com/system/resources/previews/011/319/007/original/gym-and-fitness-logo-png.png" width="70" height="70" alt=""/>
        </a>


        <div className='ll' >

        <ul className='ll  ' >
            <li >
                <Link to="/">dashboard</Link>
            </li>
            <li>
            <Link to="/userdata">userdata</Link>
            </li>
        </ul>

                     </div>
            </nav>

  )
}

export default Navbar