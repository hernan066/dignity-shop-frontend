import React from "react";
import { useDispatch } from "react-redux";

import { starLogout } from "../actions/auth";
import Navbar from "../components/Navbar";

const MiCuenta = () => {
  
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(starLogout());
    
  }
  
  return (
    <>
      <Navbar />
      <div className="miCuenta__main">
        <div className="miCuenta__datos">
          <h1>Datos de mi cuenta</h1>
          <button onClick={handleClick}>Salir</button>
        </div>
      </div>
    </>
  );
};

export default MiCuenta;
