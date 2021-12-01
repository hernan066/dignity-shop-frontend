import React from "react";
import { Link } from "react-router-dom";
import MovilNavbar from "./navbar/MovilNavbar";

import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

import {useDispatch, useSelector} from 'react-redux';
import { closeHambugerMenu, openHambugerMenu } from "../actions/ui";

const Navbar = () => {
  
  const {hambugerMenu} = useSelector(state => state.ui)
  const cart = useSelector(state => state.cart)
  const {uid} = useSelector(state => state.auth)
  
  const dispatch = useDispatch()
  
  const handleOpenMenu = () => dispatch(openHambugerMenu());
  const handleCloseMenu = () => dispatch(closeHambugerMenu());
  

  
  
  
  
  return (
    <nav className="nav__main">
      <div className="nav__wrapper">
        <div className="nav__menu-icon">
          {hambugerMenu ? (
            <i className="fas fa-times" onClick={handleCloseMenu}></i>
          ) : (
            <i className="fas fa-bars" onClick={handleOpenMenu}></i>
          )}
        </div>
        <div className="nav__left">
          <h1>
            <Link to="/">-Dignity-</Link>
          </h1>
        </div>
        <div className="nav__center">
          <ul className="nav__menu">
            <li>
              <Link to="/productos/ropa-nino">Ropa Niño</Link>
            </li>
            {
              <li>
                <Link to="/productos/ropa-interior">Ropa interior</Link>
              </li>
            }
            {
              <li>
                <Link to="/productos/mallas">Mallas</Link>
              </li>
            }
            <li>
              <Link to="/productos/accesorios">Accesorios</Link>
            </li>
          </ul>
        </div>
        <div className="nav__right">
          {
            uid 
            ? (
              <Link to="/cuenta" className="nav__icon-login">
              <span>
                <i className="far fa-user-circle"></i>
              </span>
            </Link>
            )
            :(
              <Link to="/login" className="nav__icon-login">
              <span>
                <i className="far fa-user-circle"></i>
              </span>
            </Link>
            )
          }
          
          
          <Link to="/carrito">
            <span>
              <Badge badgeContent={cart.quantity} color="secondary">
                <ShoppingCartOutlined className="nav__icon-carrito"/>
              </Badge>
            </span>
          </Link>
        </div>

        {hambugerMenu ? <MovilNavbar  /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
