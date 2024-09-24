import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/HomePage.css';

const homepage = () => {
  return (
    <div>
      
      <div className="body-container">
      <h1>Welcome to the Body Component</h1>
      <NavLink to="/login">Se connecter</NavLink>
    </div>
    </div>
  )
}

export default homepage
