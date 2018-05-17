import React, { Component } from 'react'
import './css/Navbar.css'


const Navbar = (props) => {
  return <nav>
    <div className="logo"><img src="http://via.placeholder.com/130x80" alt="Logo" /></div>
    <div className="nav-item">
      <ul>
        <a href="">
          <li>
            <img src="http://via.placeholder.com/70x70" alt="Escorts book" />
            <p>Escorts book</p>
          </li>
        </a>
        <a href="">
          <li>
            <img src="http://via.placeholder.com/70x70" alt="My profile" />
            <p>My profile</p>
          </li>
        </a>
        <a href="">
          <li>
            <img src="http://via.placeholder.com/70x70" alt="My reservations" />
            <p>My reservations</p>
          </li>
        </a>
      </ul>
    </div>
    <div className="logout">
      <a href="">
        <img src="http://via.placeholder.com/40x40" alt="Log out" />
        <p>Log out</p>
      </a>
    </div>
  </nav>

}

export default Navbar
