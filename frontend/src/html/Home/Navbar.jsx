import React from 'react';
import '../../css/Navbar.css';

function Navbar() {
  return (
    <div >

       <div id='nav-bar'> 
       <img src="brain.png" alt="logo" width="100%" height="100%" />
       <ul>
  <li><a href="">Home</a></li>
  <li><a href="">Communities</a></li>
  <li><a href="">Events</a></li>
  <li><a href="">Resources</a></li>

</ul>
   <button id='button'>Login</button>
   <button id='button'>Sign Up</button>
       </div>
    </div>
  )
}
export default Navbar;
