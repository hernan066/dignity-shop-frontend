import React from 'react'

import GliderCom  from './GliderCom';

const Carrusel = () => {
    
    
    
    
    return (
        <div className="carrusel__main">
            <h3>¡SEGUINOS EN <span>INSTAGRAM!</span> <a href="https://www.instagram.com/">@dignityoficial</a> </h3> 
            <div className="carrusel__img">
                
                <GliderCom />

            </div>
            
            
            <div className="carrusel__info">
                <div className="carrusel__col">
                <i className="far fa-comment-alt"></i>
                <p>Atencion al cliente</p>
                </div>
                <div className="carrusel__col">
                <i className="fas fa-shopping-cart"></i>
                <p>Como comprar</p>
                </div>
                <div className="carrusel__col">
                <i className="far fa-credit-card"></i>
                <p>Medios de pago</p>
                </div>
                <div className="carrusel__col">
                <i className="fas fa-shipping-fast"></i>
                <p>Formas de envio</p>

                </div>

            </div>
        </div>
    )
}

export default Carrusel
