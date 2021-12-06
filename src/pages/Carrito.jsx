import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CarritoProducto from "../components/carrito/CarritoProducto";
//import Navbar from "../components/Navbar";

const Carrito = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <>
     <nav className="navbarSimple__main">
        <h1>
          <Link to="/">-Dignity-</Link>
        </h1>
      </nav>

      <div className="carrito__main">
      <ul className="order__steps">
        <li className="active">
          <div className="order__steps_number">
            <span>1</span>
            <p>Elige los productos</p>
          </div>
        </li>
        <li className="">
          <div className="order__steps_number">
            <span>2</span>
            <p>Completa tus datos</p>
          </div>
        </li>
        <li className="">
          <div className="order__steps_number">
            <span>3</span>
            <p>Confirma tu compra</p>
          </div>
        </li>
      </ul>

        <h2>Carrito de compras</h2>

        {cart.products.length === 0 ? (
          <div className="carrito__vacio">
          <h3>El carrito esta vacio, agrega productos para poder comprar.</h3>
          </div>
        ) : (
          <div className="carrito__container">
            <div className="carrito__productos">
              {cart.products.map((item) => (
                <CarritoProducto item={item} key={item.product_cart_id} />
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
              
              <button className="carrito__btn"  onClick={() => navigate("/orden")} >Comprar</button>
            </div>
          </div>
        )}

        <button
          className="carrito__seguir_comprando"
          onClick={() => navigate("/")}
        >
          <i className="fas fa-arrow-left"></i> Seguir comprando
        </button>
      </div>
    </>
  );
};

export default Carrito;
