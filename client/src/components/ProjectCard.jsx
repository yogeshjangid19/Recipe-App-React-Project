import React, { useState } from 'react'
import RecipeCard from './RecipeCard'
import recipe_data from '../recipe_data'
import "./ProjectCard.css";

const ncard = (val) => {
  return < RecipeCard key={val.id} title={val.title} imgsrc={val.imgsrc} category={val.category} id={val.id} />
}

const ProjectCard = () => {


  //   const [Data,setData] = useState([]);      To fetch from Api store
  // //here we fetched data from api store
  //   useEffect(()=>{
  //     const fetchdata = async ()=>{

  //       try{
  //       const response =await fetch("https://fakestoreapi.com/products")
  //       const Data =await response.json();
  //       setData(Data); 
  //       }  

  //         catch(error){
  //           console.log("Error Fetching", error)
  //         }
  //         };
  //         fetchdata();
  //     },[]);
  const [selectedCategory, setSelectedCategory] = useState(''); // State to store the selected category

  // Filter recipes based on the selected category
  const filteredRecipes =
    selectedCategory === ''
      ? recipe_data // Show all recipes if no category is selected
      : recipe_data.filter((val) => val.category === selectedCategory);

  // Handle category card click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update the selected category
  };
  return (
    <>
      <div className="category_container" id='recipe'>

        <div className="category_card" onClick={() => handleCategoryClick('')}>
          <div className="card_img">
            <img src="https://assets.vogue.in/photos/61d84b5b9db8964401d2b0e4/3:2/w_4599,h_3066,c_limit/15%20best%20multi-cuisine%20restaurants%20in%20Mumbai,%20New%20Delhi,%20Bengaluru,%20Kolkata%20and%20Goa.jpg" alt="" />
          </div>
          <div className="card_title">
            <h3>ALL RECIPES</h3>
          </div>
        </div>


        <div className="category_card" onClick={() => handleCategoryClick('North Indian')} >
          <div className="card_img">
            <img src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" alt="" />
          </div>
          <div className="card_title">
            <h3>NORTH INDIAN</h3>
          </div>
        </div>

        <div className="category_card" onClick={() => handleCategoryClick('Fast Food')}>
          <div className="card_img">
            <img src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="" />
          </div>
          <div className="card_title">
            <h3>FAST FOOD</h3>
          </div>
        </div>

        <div className="category_card" onClick={() => handleCategoryClick('South Indian')}>
          <div className="card_img">
            <img src="https://traditionallymodernfood.com/wp-content/uploads/2022/06/auto-draft.jpeg" alt="" />
          </div>
          <div className="card_title">
            <h3>SOUTH INDIAN</h3>
          </div>
        </div>

        <div className="category_card" onClick={() => handleCategoryClick('Healthy')}>
          <div className="card_img">
            <img src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" alt="" />
          </div>
          <div className="card_title">
            <h3>HEALTHY</h3>
          </div>
        </div>

      </div>
      <hr class="solid"></hr><br />



      <div className="RecipeCardsCont">
        {filteredRecipes.map((val, index) => (
          <div key={val.id} >
            {ncard(val)}
          </div>
        ))}


      </div>
    </>
  )
}
export default ProjectCard;
