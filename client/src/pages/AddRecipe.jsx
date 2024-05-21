import React, { useState } from 'react';
import "./AddRecipe.css";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import axios from 'axios';

const AddRecipe = () => {

  const [recipeData, setRecipeData] = useState({
    id: '',
    recipeName: '',
    desc: '',
    category: '',
    ingredients: '',
    directions: '',
  });


  const handleChange = (e) => {
    console.log(e);
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your Express API to add a new product
      await axios.post("/addrecipe", recipeData);

      // Clear the form fields after successful submission
      setRecipeData(
        {
          id: '',
          recipeName: '',
          desc: '',
          category: '',
          ingredients: '',
          directions: '',
        }
      )
      // Reset other form fields here

      alert("Recipe added successfully!");
    } catch (error) {
      console.error("Error adding Recipe:", error);
      alert("Error adding product. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="addrecipeCntnr">
        <div className="recipeInput">
          <h1>Add Recipes </h1>

          <form onSubmit={handleSubmit}>
            <input type="number" id="id" name="id" value={recipeData.id} required placeholder="ID" onChange={handleChange} />
            <input type="text" id="recipeName" name="recipeName" value={recipeData.name} required placeholder="Recipe Name" onChange={handleChange} />
            <input type="text" id="desc" name="desc" value={recipeData.desc} required placeholder="Description" onChange={handleChange} />
            <input type="text" id="category" name="category" value={recipeData.category} required placeholder="Category of Recipe" onChange={handleChange} />
            <input type="text" id="ingredients" name="ingredients" value={recipeData.ingredients} required placeholder="Ingredients" onChange={handleChange} />
            <input type="text" id="directions" name="directions" value={recipeData.directions} required placeholder="Directions" onChange={handleChange} />
            <button type="submit">Add Recipe</button>
          </form>


        </div>
      </div>
      <Footer />

    </div>
  )
}

export default AddRecipe
