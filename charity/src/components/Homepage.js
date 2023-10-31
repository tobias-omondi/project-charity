import React from 'react'
import Images from '../images/360_F_609867032_t6AbRWNjfZN8nDPC3VlQ51EY8BBNpw8j.jpg'
import './Navbar.css'

const Homepage = () => {
  return (
    <div>
      <div className='image-logo'>
      <li className=''><a href="/image.png"><img src={Images} alt="Image link" /></a></li>
      </div>
    </div>
  )
}

export default Homepage
