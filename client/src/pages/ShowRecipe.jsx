import React, { useEffect, useState } from 'react';
import './ShowRecipe.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import recipeBG from "../Resources/recipeBG.jpg";

const ShowRecipe = ({ recipedata }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/recipes", {
            method: "GET",

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data,"recipedata");
                setData(data.data)
            });
    }, []);



    return (
        <div>
            <div className="navbarrCont">
            <Navbar />


            </div>
            <div >
                <div className="recipeContainer">
                    <div className="sideBanner">

                    </div>
                    <div className="showRecipe">
                    {data.map(i => {
                        return (

                            <div className="Rrecipe_details">
                                <div className="Rcardz">
                                    <div className="Rdetails">
                                        <h2>Recipe Name : {i.recipeName}</h2>
                                        <h5><b>Category :</b> {i.category}</h5>
                                        <h5><b>Description :</b> {i.desc}</h5>
                                        <h5><b>Ingredients :</b> {i.ingredients}</h5>
                                        <h5><b>Directions :</b> {i.directions}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    </div>

                    
                </div>

            </div>




            <Footer />
        </div>
    );
};

export default ShowRecipe;
