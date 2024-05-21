import React, { useState } from 'react';
import "./ContactUs.css";
import axios from 'axios';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactUs = () => {

    const [query, setQuery] = useState({
        name: '',
        email: '',
        mobile: '',
        msj: '',
    });

    const handleChange = (e) => {
        console.log(e);
        setQuery({ ...query, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to your Express API to add a new product
            await axios.post("/contact", query);

            // Clear the form fields after successful submission
            setQuery(
                {
                    name: '',
                    email: '',
                    mobile: '',
                    msj: '',
                }
            )
            // Reset other form fields here
            alert("Query Submitted successfully!");
        } catch (error) {
            console.error("Error Submitting Query:", error);
            alert("Error Submitting Query. Please try again later.");
        }
    };




    return (
        <div>
            <Navbar />
            <div className="contactContainer">
                <h1>CONTACT <span>US</span> <i class="fas fa-address-book"></i> </h1>
                <form className='contactForm' onSubmit={handleSubmit}>
                    <input type="text" id="recipeName" name="name" value={query.name} onChange={handleChange} required placeholder="Name" />
                    <input type="email" id="desc" name="email"value={query.email} onChange={handleChange} required placeholder="Email Address" />
                    <input type="number" id="category" name="mobile"value={query.mobile} onChange={handleChange} required placeholder="Mobile Number" />
                    <input type="text" id="ingredients" name="msj" value={query.msj} onChange={handleChange} required placeholder="Message" />
                    <button className='contactButton' type="submit">Add Recipe</button>
                </form>



            </div>


        </div>
    )
}

export default ContactUs
