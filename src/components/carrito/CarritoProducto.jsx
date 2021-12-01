import React from 'react'

const CarritoProducto = ({item}) => {
    return (
        <div className="carrito__producto">
                <div className="carrito__img">
                  <img src={item.img} alt={item.desc} />
                </div>
                <div className="carrito__info">
                  <div className="carrito__col">
                    <h3>Producto</h3>
                    <i>{item.title}</i>
                  </div>

                  <div className="carrito__col">
                    <h3>Precio</h3>
                    <p>${item.price}</p>
                  </div>
                  <div className="carrito__col">
                    <h3>Cantidad</h3>
                    <p>1</p>
                  </div>
                  <div className="carrito__col">
                    <h3>Borrar</h3>
                    <i className="far fa-times-circle"></i>
                  </div>
                </div>
              </div>
    )
}

export default CarritoProducto
