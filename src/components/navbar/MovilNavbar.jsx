import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeHambugerMenu } from "../../actions/ui";

const MovilNavbar = () => {
  
  
  const dispatch = useDispatch();
  
  
  
  const handleClick = () => {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth"
      }
    );
    dispatch(closeHambugerMenu());
  }
   

  return (
    <div className="movilNav__container">
      <div className="movilNav__overlay "></div>
      <div className="movilNav__main  animate__animated animate__fadeInLeft">
      
        <h2>Shop</h2>
        
        <ul className="movilNav__menu">
          <li>
            <Link to="/productos/ropa-nino" onClick={handleClick}>Ropa Niño</Link>
          </li>
          <li>
            <Link to="/productos/ropa-interior" onClick={handleClick}>Ropa interior</Link>
          </li>
          <li>
            <Link to="/productos/mallas" onClick={handleClick}>Mallas</Link>
          </li>
          <li>
            <Link to="/productos/accesorios" onClick={handleClick}>Accesorios</Link>
          </li>
          <li>
          <Link to="/login">Mi cuenta</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovilNavbar;
