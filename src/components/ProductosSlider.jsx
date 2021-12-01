import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { Link } from "react-router-dom";
import { datos } from "../data/datos";

const Contenido = ({ children, style, className }) => (
  <div className={`slide ${className}`} style={style}>
    <h1>{children}</h1>
  </div>
);

const ProductosSlider = () => {
  const gliderRef = React.useRef(null);

  return (
    <div className="prodSlider__main">
      <h2>Nuestros productos</h2>
      <div className="prodSlider__slider">
        <Glider
          ref={gliderRef}
          scrollLock
          //draggable
          hasArrows
          //hasDots
          slidesToShow={3}
          slidesToScroll={1}
          scrollToSlide={3}
          className="gradient-outline hide-scrollbar"
          onSlideVisible={(context, event) => {
            //console.log("onSlideVisible", context, event);
          }}
        >
          {datos.map((data) => (
            <Contenido key={data.id}>
              <div className="carrusel__elemento">
                <Link to={`/producto/${datos._id}`}><img src={data.imagen} alt={data.descripcion} /></Link>
                <h3>{data.nombre}</h3>
                <p>{data.precio}</p>
              </div>
            </Contenido>
          ))}
        </Glider>
        <h4><Link to="/productos">Ver mas productos</Link></h4>
      </div>
      
    </div>
  );
};

export default ProductosSlider;


