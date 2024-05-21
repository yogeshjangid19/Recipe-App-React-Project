import React from 'react'
import Navbar from '../components/Navbar';
import SignupBg from "../Resources/SignupBg.jpg";
import { Link } from 'react-router-dom';
import "./Signup.css"
import axios from "axios";
const Login = () => {
    return (
        <div>
            <Navbar />
            <div className="containerr">
                <img src={SignupBg} alt="bg img" />

                <h1>Login</h1>

                <div className="form">
             
                    <input type="email" id="email" name="email" required placeholder="Email" />
                    <input type="password" id="password" name="password" required placeholder="Password" />
                    <button> Login</button>
                    <h4>or</h4>
                    <button className='signupBtn'><Link to="/signup"> Don't have account?</Link></button>
                </div>
            </div>

        </div>
    )
}

export default Login;
