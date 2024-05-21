import React from 'react';
import "./About.css";
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
const About = () => {
    return (
        <div>
            <Navbar />
            <div className="abtcntnr">
                <div className="heroImg">
                    <img src="https://www.simplyrecipes.com/thmb/PxxkJ0Ks13GZN-wZ01JlN3JBDvo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SRAbout-a515fb4bc8724313ae51fa1d483572c6.png" alt="" />
                </div>
                <h2 className='hdng'>About Yumm! Recipes</h2>
                <h3 className='whovr'>Who We Are?</h3>
                <p className='whovrP'>YUMM! Recipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about.</p>
                <h2 className='hdngR'>Recipe Development & Testing</h2>
                <p className='recpeeP'>Our recipes primarily use fresh, unprocessed ingredients but we also believe there is a time and a place for canned, frozen, and other prepared ingredients. We believe in a diet that includes a wide variety of foods: real butter and cream, extra virgin olive oil, eggs, lots of fruits and vegetables, and protein from meat, fish, beans, and cheese. Plus cake for dessert. <br /><br />At YUMMM! Recipes, we aspire to provide the highest quality content produced by humans, for humans. It is against our guidelines to publish automatically generated content using AI (artificial intelligence) writing tools such as ChatGPT.Have feedback for us? <br />We’d love to hear from you! Please contact the team at contact@yummrecipes.com.</p>
                 <h2 className='hdngR'>Contact Us</h2>
                 <p className='recpeeP'>Have something you’d like to let us know? Whether you have a comment on a recipe or an idea to share, we would love to hear from you: contact@yummrecipes.com.For press inquiries, email us at contact@yummrecipes.com.</p>



            </div>
            <Footer />


        </div>
    )
}

export default About;
