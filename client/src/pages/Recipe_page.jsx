//Jo homescreen pe cards hai unke pagess hai yeh
import React from 'react';
import Navbar from '../components/Navbar';
import RecipePageData from '../components/RecipePageData';
import { useParams } from 'react-router-dom';
import "./Recipe_page.css";
import recipePageBanner from "../Resources/recipePageBanner.jpg"
import Footer from '../components/Footer';
const Recipe_page = () => {
  const { id } = useParams();
  const recipe = RecipePageData.find((item) => item.id === parseInt(id));

  if (!recipe) {
    return <div className='recipe_not_found'>Recipe not Found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="recipe_details">
        <h1 className='recipeh1'>{recipe.recipeName}</h1>
        <h2>{recipe.desc}</h2>
        <hr class="solid"></hr><br />
        <img src={recipe.imgsrc} alt="" className='recipeImg' />
        <h1 className='IngDir'>Ingredients</h1>
        <ul className='ingredients'>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul><br />
        <h1 className='IngDir'>Directions:</h1>
        <ol>
          {recipe.directions.map((direction, index) => (
            <li key={index}>{direction}</li>
          ))}
        </ol>
      </div>

      <Footer />
     





    </div>
  );
};

export default Recipe_page;
