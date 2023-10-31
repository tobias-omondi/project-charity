import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <ul className='list'>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/">Project</Link></li>
          <li><Link to ="/">Team</Link></li>
          <li><Link to ="/">Blog</Link></li>
          <li><Link to ="/">Login</Link></li>
          <li><Link to ="/">Signin</Link></li>
          </ul>
        <ul>
          <button className='btn-donar'>Donate</button>
        </ul>
    
      </div>
      
    </div>
  )
}

export default Navbar
