import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import recipe_data from '../recipe_data'
import SearchRecipe from "./SearchRecipe";
import "../components/SearchModal.css"
const modalStyle = {
  width: "100%",
  height: "100vh",
  margin: "0",
};

const SearchModal = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filtered = recipe_data.filter(
    (food) =>
      food.title && food.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="custom-modal"
      style={modalStyle}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Search Recipes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalStyle}>
        <form>
          <div className="form-group">
            <label htmlFor="searchQuery" >Search Recipe</label>
            <input
              type="text"
              className="form-control"
              id="searchQuery"
              placeholder="Enter keywords..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </form>
        <div className="map">
          <div className="cover">
            {filtered.map((food) => (
              <SearchRecipe key={food.id} food={food} />
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SearchModal;
