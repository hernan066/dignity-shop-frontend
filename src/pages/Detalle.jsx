import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { addProduct } from "../actions/cart";
import Navbar from "../components/Navbar";

import { publicRequest } from "../requestMethods";

const Detalle = () => {
  
  const dispatch = useDispatch();
  
  const location = useLocation();
  //console.log(location.pathname.split("/")[2])

  const id = location.pathname.split("/")[2];

   const [product, setProduct] = useState({}); 

     useEffect(() => {
       
        const getProduct = async ()=>{
            try {
                const res = await publicRequest.get("/products/find/"+id);
                setProduct(res.data);
            } catch (error) {
                console.log(error)
                
            }
        }
       getProduct();
       

      
    }, [id]);  

  const handleClick = ()=>{
    //update cart
    dispatch(addProduct(product, product.price));
  }
  
  
    return (
    <>
      <Navbar />
      <div className="detalle__main">
        <div className="detalle__img">
         {/*  <img src="https://i.ibb.co/722pd72/1.jpg" alt="3" border="0" /> */}
          <img src={product.img} alt="3" border="0" />
        </div>
        <div className="detalle__info">
          <h1>{product.title}</h1>

          <div className="detalle__review">
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <p>0 review(s)</p>
          </div>
          <div className="detalle__infos">
            <h3>Precio</h3>
            <p>${product.price}</p>
          </div>
          <div className="detalle__infos">
            <h3>Detalle del producto</h3>
            <p>{product.desc}</p>
          </div>
          <div className="detalle__infos">
            <h3>Talle</h3>
            <p>{product.size}</p>
            <div className="detalle__talle">
             {/*  <span>S</span> <span>M</span>
              <span>L</span> */}
            </div>
          </div>
          <div className="detalle__infos">
            <h3>Metodo de pago</h3>
            <p>Efectivo - Trasferencia bancaria - Marcado pago</p>
          </div>
          <div className="detalle__infos">
            <h3>Metodo de envio</h3>
            <p>Consultar</p>
          </div>

          <button onClick={handleClick}>Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default Detalle;
