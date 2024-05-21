import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import ".//Home.css";
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import banner from "../Resources/banner.jpg";
import recipe_data from '../recipe_data';
import HomeHeader from './HomeHeader';
import Newsletter from '../components/Newsletter';

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState(''); // State to store the selected category
  const filteredRecipes = selectedCategory
    ? recipe_data.filter((recipe) => recipe.category === selectedCategory)
    : recipe_data; // Filter recipes based on the selected category or show all recipes if no category is selected

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update the selected category when a category card is clicked
  };
  return (
    <div className='mainDiv'>
      <div className="contain">
        <div className="navbarr">
          <Navbar />
        </div>
        <HomeHeader />
        <div className="recipes">
          <span className='category_h1'>Browse by category</span>
          <ProjectCard />
        </div>
        <Newsletter />
        <div className="banner">
          <img src={banner} alt="" />
        </div>
        <Footer />
      </div>
    </div>
  )
};
export default Home;