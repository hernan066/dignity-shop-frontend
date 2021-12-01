import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer__main">
            <div className="footer__nav">
                <div className="footer__col">
                    <h3>Informacion</h3>
                   
                    <Link to="/">Como comprar</Link>
                    <Link to="/">Envios</Link>
                </div>
                <div className="footer__col">
                    <h3>Mi cuenta</h3>
                   
                    <Link to="/register">Registrarse</Link>
                    <Link to="/login">Ingresar</Link>
                </div>
                <div className="footer__col institucional">
                        <h3>Institucional</h3>
                        
                        <Link to="/">Términos y condiciones</Link>
                        <Link to="/">Politicas de privacidad</Link>
                        
                        
                        
                </div>
                <div className="footer__col">
                        <h3>Seguinos</h3>
                        <div className="footer__redes">
                        <i className="fab fa-instagram"></i> <a href="https://www.instagram.com/">Instagram</a>
                        </div>
                        <div className="footer__redes">
                        <i className="fab fa-facebook-square"></i><a href="https://www.facebook.com/">Facebook</a>
                        </div>
                      
                        
                </div>
            </div>
            
            
            <hr />
            <p>Design by Hernan Moneta - Copyright © 2021</p>
            
        </div>
    )
}

export default Footer
