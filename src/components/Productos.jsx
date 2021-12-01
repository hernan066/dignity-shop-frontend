import axios from "axios";
import React, { useEffect, useState } from "react";
//import ReactPaginate from "react-paginate";

import Producto from "./Producto";


const Productos = ({cat, filters, sort}) => {
  console.log(cat, filters, sort)
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://dignity-shop.herokuapp.com/api/products?category=${cat}`
            : "https://dignity-shop.herokuapp.com/api/products"
        );
        setProducts(res.data);
        console.log(res.data)
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  //filtros productos
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  
  //Orden productos
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  
  
  ///////paginacion//////
  
  //const [cantProducts, setcantProducts] = useState(products.slice(0, 50));
  /* const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 10;
  const pageVisited = pageNumber * userPerPage;

  const displayProducts = filteredProducts
    .slice(pageVisited, pageVisited + userPerPage)
    .map((product) => <Producto datos={product} key={product._id} />);

  const pageCount = Math.ceil(filteredProducts.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }; */

  return (
    <div className="prod__container">
      

      <div className="prod__main">
        {
          cat 
          ? filteredProducts.map((datos) => (<Producto datos={datos} key={datos._id} />))
          : products.splice(0, 8).map((datos)=>(<Producto datos={datos} key={datos._id} />))
        
        
        } 
        
        
        
        {/* {displayProducts} */}
      </div>

      {/* <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginate__container"}
        previousClassName={"paginate__btn_prev"}
        nextLinkClassName={"paginate__btn_next"}
        disabledClassName={"paginate__disable"}
        activeClassName={"paginate__active"}
        pageClassName={"paginate__page"}
      /> */}
    </div>
  );
};

export default Productos;
