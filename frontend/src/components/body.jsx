import React from 'react';
import '../styles/body.css';
import { NavLink } from 'react-router-dom';
 


const Body = () => {
  return (
    <div className="body-container">
      <h1>Welcome to the Body Component</h1>
      <NavLink to="/login">Se connecter</NavLink>
  

 

    </div>
  );
}

export default Body;
