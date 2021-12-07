import React from 'react'

const OrdenCompraProducto = ({item}) => {
    return (
        <div className="order__producto">
                <div className="order__img">
                  <img src={item.product.img} alt="desc" />
                </div>
                <div className="order__title">
                  <h4>{item.product.title}</h4>
                  <div className="order__price">
                    <p>Cant: 1 </p>
                    <p>${item.product.price}</p>
                  </div>
                </div>
              </div>
    )
}

export default OrdenCompraProducto
