import React from 'react'

const Newsletter = () => {
    return (
        <div className="news__main">
            
            <h3>Newsletter</h3>
            <p>Recibí en tu mail novedades, promociones, ofertas especiales y todas nuestras noticias.</p>
            <div className="news__mail">
            <form>
                <input type="text" placeholder="Ingresa tu email" />
                <button>Suscribirse</button>
            </form>
            </div>
            
            
        </div>
    )
}

export default Newsletter
