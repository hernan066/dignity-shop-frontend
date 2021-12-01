import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom';
import { startChecking } from "../actions/auth";

import Carrito from "../pages/Carrito";
import Detalle from "../pages/Detalle";
import EnConstruccion from "../pages/EnConstruccion";
import Home from "../pages/Home";
import Loading from "../pages/Loading";
import { Login } from "../pages/Login";
import MiCuenta from "../pages/MiCuenta";
import ProductosLista from "../pages/ProductosLista";
import { Register } from "../pages/Register";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";



const AppRouter = () => {
  
  const dispatch = useDispatch();
  const {checking} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch]);

  
  
  if (checking){
    return <Loading />
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<Detalle />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/construction" element={<EnConstruccion />} />
        <Route path="/productos/:category" element={<ProductosLista />} />

        <Route path="/cuenta" element={
                    <PrivateRoute>
                        <MiCuenta />
                    </PrivateRoute>
                } />

        <Route path="/login" element={ 
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                 } />
                        
        <Route path="/register" element={ 
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                 } />
                        

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
