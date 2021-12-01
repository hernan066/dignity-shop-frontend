import "glider-js/glider.min.css";
import React from "react";
import Glider from "react-glider";

import { carruselImg } from "../data/datos";

const PaneExample = ({ children, style, className }) => (
  <div className={`slide ${className}`} style={style}>
    <h1>{children}</h1>
  </div>
);

const GliderCom = () => {
  const gliderRef = React.useRef(null);

  return (
    <div className="App">
      <div className="glider-wrapper">
        <Glider
          ref={gliderRef}
          scrollLock
           draggable 
          hasArrows
          hasDots
          slidesToShow={3}
          slidesToScroll={1}
          scrollToSlide={3}
          className="gradient-outline hide-scrollbar"
          onSlideVisible={(context, event) => {
            //console.log("onSlideVisible", context, event);
          }}
        >
          {carruselImg.map((data) => (
            <PaneExample key={data.img}>
              <div className="carrusel__elemento">
              <img src={data.img} alt={data.alt} />
              </div>
            </PaneExample>
          ))}
        </Glider>
      </div>
    </div>
  );
};

export default GliderCom;
