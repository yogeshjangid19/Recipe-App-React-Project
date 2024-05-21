import React from 'react';
import Card from 'react-bootstrap/Card';
import './RecipeCard.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RecipeCard = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipepage/${props.id}`);
    window.scrollTo(0, 0); // Scroll to the top of the page when we click the card
  };

  return (
    <div>
      <div className="cardz" onClick={handleClick}>
        <div className="imageSec">
          <img src={props.imgsrc} alt="" />
        </div>
        <div className="details">
          <h2>{props.title}</h2>
          <h5>{props.category}</h5>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
