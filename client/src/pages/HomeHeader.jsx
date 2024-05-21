import React, { useState } from 'react';
import "./HomeHeader.css";
import SearchModal from "../components/SearchModal"
import search from "../Resources/search.svg"
const HomeHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="HHcontainerr">
        <h2 className='tagline'>Discover the Rich Tastes of</h2>
        <h1 className='tag2'> Indian Cuisine</h1>

        <div className="search_bar" onClick={openModal}>
          <div className="search_logo">
            <img src={search} alt="My Icon" />
          </div>
          <input type="text" placeholder="Search your Recipe." />
        </div>
      </div>

      {isModalOpen && <SearchModal show={isModalOpen} onHide={closeModal} />}
    </div>
  )
}

export default HomeHeader;
