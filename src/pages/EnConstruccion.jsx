import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const EnConstruccion = () => {
  return (
    <>
       <Navbar /> 
      <div className="construction__main">
        <div className="construction__img" >
        <img
          src="https://i.ibb.co/8j2739k/under-construction.jpg"
          alt="construction"
        />
        </div>
        <Link to="/">Volver</Link>
        
      </div>
    </>
  );
};

export default EnConstruccion;
