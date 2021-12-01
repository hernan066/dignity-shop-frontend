import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CarritoProducto from "../components/carrito/CarritoProducto";
import Navbar from "../components/Navbar";

const Carrito = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="carrito__main">
        <h2>Carrito de compras</h2>
        <div className="carrito__container">
          <div className="carrito__productos">
            {cart.products.map((item) => (
              <CarritoProducto item={item} key={item._id}/>
            ))}
          </div>

          <div className="carrito__totales">
            <h3>Resumen</h3>
            <hr />
            <div className="carrito__totales-sub">
              <p>Subtotal:</p>
              <p>${cart.total}</p>
            </div>
            <hr />
            <div className="carrito__totales-to">
              <p>Total: </p>
              <p>${cart.total}</p>
            </div>
            <button className="carrito__btn">Comprar</button>
          </div>
        </div>
        <button className="carrito__seguir_comprando" onClick={() => navigate(-2)}>
          <i className="fas fa-arrow-left"></i> Seguir comprando
        </button>
      </div>
    </>
  );
};

export default Carrito;
