import React, { useState } from 'react'
import "./Newsletter.css";
import axios from 'axios'

const Newsletter = () => {

    const [email, setEmail] = useState({email:''})

    const handleChange = (e) => {
        console.log(e);
        setEmail({ ...email, [e.target.name]: e.target.value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Send a POST request to your Express API to add a new product
          await axios.post("/", email);
          // Clear the form fields after successful submission
          setEmail(
            {email:''}
          )
          // Reset other form fields here
    
          alert("Subscribed successfully!");
        } catch (error) {
          console.error("Error Subscribing", error);
          alert("Error Subscribing. Please try again later.");
        }
      };


    return (
        <div>
            <div className="Ncontainer">
                <h2>Sign up for our weekly newsletters!</h2>
                <div class="input-container">
                    <form  className='nwslttr' onSubmit={handleSubmit} >
                        <input type="email"  name="email" value={email.email} onChange={handleChange} placeholder="Enter Email Address"  />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Newsletter
