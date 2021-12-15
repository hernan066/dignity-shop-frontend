import React from "react";

import {
    HashRouter,
    Routes,
    Route,
  } from 'react-router-dom';


import Carrito from "../pages/carrito/Carrito";
import Detalle from "../pages/Detalle";
import EnConstruccion from "../pages/EnConstruccion";
import Home from "../pages/Home";

import { Login } from "../pages/Login";
import MiCuenta from "../pages/MiCuenta";
import OrdenCompra from "../pages/carrito/OrdenCompra";
import ProductosLista from "../pages/ProductosLista";
import { Register } from "../pages/Register";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import ConfirmaCompra from "../pages/carrito/ConfirmaCompra";



const AppRouter = () => {
  
  
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<Detalle />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/productos/:category" element={<ProductosLista />} />
        <Route path="/construction" element={<EnConstruccion />} />
        <Route path="/orden" element={<OrdenCompra />} />
        <Route path="/confirma" element={<ConfirmaCompra />} />
       {/*  <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cuenta" element={<MiCuenta />} /> */}

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
    </HashRouter>
  );
};

export default AppRouter;
