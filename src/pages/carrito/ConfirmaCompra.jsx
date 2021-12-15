import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrdenCompraProducto from "../../components/carrito/OrdenCompraProducto";

const ConfirmaCompra = () => {
  const { products, total } = useSelector((state) => state.cart);

  return (
    <div>
      <nav className="navbarSimple__main">
        <h1>
          <Link to="/">-Dignity-</Link>
        </h1>
      </nav>
      <ul className="order__steps">
        <li className="active">
          <div className="order__steps_number">
            <span>1</span>
            <p>Elige los productos</p>
          </div>
        </li>
        <li className="active">
          <div className="order__steps_number">
            <span>2</span>
            <p>Completa tus datos</p>
          </div>
        </li>
        <li className="active">
          <div className="order__steps_number">
            <span>3</span>
            <p>Confirma tu compra</p>
          </div>
        </li>
      </ul>

      <div>
        <h2>Confirma tu compra</h2>

        <div className="order__container" >
          
          <div className="orden__envio">
            <h3>Datos de envio</h3>
            <ul>
                <li>
                    <span>Nombre:</span>
                </li>
                <li>
                    <span>Direccion:</span>
                </li>
                <li>
                    <span>Telefono:</span>
                </li>
            </ul>
          </div>
          
          
          
          <div className="order__detalle">
            <h3>Vas a comprar</h3>
            {products.map((item) => (
              <OrdenCompraProducto key={item.product_cart_id} item={item} />
            ))}

            <div className="order__total">
              <h4>Total</h4>
              <h4>${total}</h4>
            </div>

            <button
              className="order__seguir_comprando"
             /*  onClick={() => navigate(-1)} */
            >
              <i className="fas fa-arrow-left"></i> Volver al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmaCompra;
