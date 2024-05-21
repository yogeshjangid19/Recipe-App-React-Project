import React, { useState } from 'react'
import "./Signup.css";
import Navbar from '../components/Navbar';
import SignupBg from "../Resources/SignupBg.jpg"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {

    const navigate = useNavigate();

    const [alertMessage, setAlertMessage] = useState("");
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: "",
    });


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUser({
    //         ...user,
    //         [name]: value,
    //     });
    // };
    let name, value;

    const handleChange = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const handleSuccessfulLogin = (userData) => {

        localStorage.setItem("userData", JSON.stringify(userData));

        console.log(localStorage);
        props.onLogin();
    };




    const register = async (e) => {
        e.preventDefault();

        const { name, email, password, confirmpassword } = user;
        const res = await fetch("/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password, confirmpassword})
        })
        const data = await res.json();
        if(data.status===422 || !data){
            window.alert("Invalid registration");
            console.log("Invalid registration");
        }else{
            window.alert("registration Successful");
            console.log("registration Successfull");
            navigate.push("/signin");
        }
    }

    //  by axios
    // if (name && email && password && password === confirmpassword) {
    //     axios
    //         .post("http://localhost:8080/signup", user)
    //         .then((res) => {

    //             const userData = res.data.user;
    //             handleSuccessfulLogin(userData);
    //         })
    //         .catch((error) => {

    //             setAlertMessage("Registration failed. Please try again.");
    //         });
    // } else {
    //     setAlertMessage("Invalid Credentials");
    // }
    // };




    return (
        <div>
            <Navbar />
            <div className="containerr">
                <img src={SignupBg} alt="bg img" />

                <h1>Create Account</h1>

                <form className="form" method='POST'>

                    <input type="text" id="name" name="name" value={user.name} required placeholder="Name" onChange={handleChange} />
                    <input type="email" id="email" name="email" value={user.email} required placeholder="Email" onChange={handleChange} />
                    <input type="tel" id="phone" name="phone" value={user.phone} required placeholder="Phone" onChange={handleChange} />
                    <input type="password" id="password" name="password" value={user.password} required placeholder="Password" onChange={handleChange} />
                    <input type="password" id="confirm-password" value={user.confirmpassword} name="confirmpassword" required placeholder="Confirm Password" onChange={handleChange} />
                    <button onClick={register}> Submit</button>



                </form>


            </div>

        </div>
    )
}

export default Signup;
