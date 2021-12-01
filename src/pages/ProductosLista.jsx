import React, { useState } from "react";
import { useLocation } from "react-router";

import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Productos from "../components/Productos";

const ProductosLista = () => {
  
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
          ...filters,
          [e.target.name]: value,
        });
      };
      console.log(filters) 
  
    return (
    <div>
      <Navbar />
      <div className="productosLista__main">
        <h2>Productos</h2>
        <div className="productosLista__filtros">
          <div className="productosLista__filtros_cat">
            
            {
              cat === "ropa-nino" ?  <p> ropa-niño </p> : <p> {cat} </p>
            }
            
            
           
            
            
            
            
            
             <select name="categories" onChange={handleFilters} className="productosLista__select">
            <option disabled defaultValue>
              Categoria
            </option>
              <option value="ropa-nino">Ropa niño</option>
              <option value="ropa-interior">Ropa interior </option>
              <option value="mallas">Mallas</option>
              <option value="accesorios">Accesorios</option>
            </select> 
          </div>
          <div className="productosLista__filtros_orden">
            <span>Ordenado por </span>
            <select onChange={(e)=> setSort(e.target.value)}>
              <option value="newest">Más nuevo</option>
              <option value="desc">Menor precio </option>
              <option value="asc">Menor precio </option>
            </select>
          </div>
        </div>
      </div>

      <Productos cat={cat} filters={filters} sort={sort} />
      <Carrusel />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductosLista;
