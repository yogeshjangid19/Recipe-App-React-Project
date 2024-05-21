import React from 'react';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from "../Resources/logo.png"
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>


      <div className="navv">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="items">
          <ul>
          <Link to="/"><li><i class="fas fa-house"></i> Home </li></Link>
          <Link to="/recipes"> <li><i class="fas fa-utensils"></i> Recipes</li></Link>

          <Link to="/about"><li><i class="fas fa-address-card"></i> About</li></Link>
          </ul>
        </div>
        <div className="reg_login">
        <Link to="/addrecipe"><button className="reg_button"> Add Recipe</button></Link>
        <Link to="/contact"> <button className="reg_button2">Contact Us</button></Link>
        {/* <Link to="/login"> <button className="reg_button2">Login</button></Link> */}
        </div>
      </div>
      

    </div>
  )
}

export default Navbar;
