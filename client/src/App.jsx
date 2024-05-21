import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recipe_page from "./pages/Recipe_page";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddRecipe from "./pages/AddRecipe";
import ShowRecipe from "./pages/ShowRecipe";
import ContactUs from "./pages/ContactUs";


function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipepage/:id" element={<Recipe_page />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/recipes" element={<ShowRecipe />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
