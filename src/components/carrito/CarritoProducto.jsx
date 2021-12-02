import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/cartRedux';

const CarritoProducto = ({item}) => {
    
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    
    dispatch(deleteProduct({
      p_id: item.product_cart_id,
      price: item.product.price
    }));
  }

  
  return (
        <div className="carrito__producto">
                <div className="carrito__img">
                  <img src={item.product.img} alt={item.product.desc} />
                </div>
                <div className="carrito__info">
                  <div className="carrito__col">
                    <h3>Producto</h3>
                    <i>{item.product.title}</i>
                  </div>

                  <div className="carrito__col">
                    <h3>Precio</h3>
                    <p>${item.product.price}</p>
                  </div>
                  <div className="carrito__col">
                    <h3>Cantidad</h3>
                    <p>1</p>
                  </div>
                  <div className="carrito__col">
                    <h3>Borrar</h3>
                    <i className="far fa-times-circle" onClick={handleDelete}></i>
                  </div>
                </div>
              </div>
    )
}

export default CarritoProducto
