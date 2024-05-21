import React from "react";
import { Button } from "react-bootstrap";
import "../components/SearchModal.css"
import { Link } from "react-router-dom";
const SearchRecipe = ({ food }) => {
  return (
    <div className="mar">
      <div className="dab">
        <div className="yourpic">
          <img src={food.imgsrc} className="patti" alt="#2"/>
        </div>
        <div className="titlename">
          <Button className="start1" as={Link} to={`/recipepage/${food.id}`}>
            {food.title}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchRecipe;
