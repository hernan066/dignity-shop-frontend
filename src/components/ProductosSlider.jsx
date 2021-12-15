import React, { useEffect } from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { Link } from "react-router-dom";

import { getProducts } from "../redux/productsRedux";
import { useDispatch, useSelector } from "react-redux";

const Contenido = ({ children, style, className }) => (
  <div className={`slide ${className}`} style={style}>
    <h1>{children}</h1>
  </div>
);






const ProductosSlider = () => {
  const gliderRef = React.useRef(null);
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products)

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

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
          {products.map((item) => (
            <Contenido key={item._id}>
              <div className="carrusel__elemento">
                <Link to={`/producto/${item._id}`}><img src={item.img} alt={item.descripcion} /></Link>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
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


