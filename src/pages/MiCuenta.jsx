import React from "react";
import { useDispatch } from "react-redux";


import Navbar from "../components/Navbar";
import { logout } from "../redux/userRedux";

const MiCuenta = () => {
  
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(logout());
    
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
