import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
   <div className='logo'>

    <img src="https://i.pcmag.com/imagery/reviews/03r6tlhZe430ac31qQVRONq-7.fit_lim.size_1050x591.v1569472924.jpg" height='100px' alt="" />
    <ul>
         <li>Platform</li>
         <li>Plans</li>
         <li>Enterprise</li>
         <li>Resources</li>
        <li>Eduction</li>

    </ul>
   </div>
   <div className="login">
    <ul>
        <li>Contact Us</li>
        <li>Log in</li>
        <li><button className='nav-button'>Sign up</button></li>
    </ul>
   </div>


    </div>
  )
}

export default Nav