import React from 'react';
import './contacto.css';

const ContactoUbicacion = () => {
    return (
        <div className="contacto-ubicacion-container">
            <div className="contacto-info">
                <h2>Contacto</h2>
                <p className="explore-message">La finca se encuentra ubicada en la Ciudad de Chiquinquirá Boyacá en la Vereda Cordoba Alto. Utiliza el mapa a continuación para identificar nuestra ubicación exacta y planificar tu visita. Para una guía paso a paso desde tu punto de partida, selecciona los botones y abre las instrucciones en Google Maps. Prepárate para una experiencia única donde la belleza natural y la cultura local te dan la bienvenida.</p>
                <p>Dirección: Chiquinquirá Boyacá, Vereda Cordoba Alto</p>
                <p>Teléfono: +57 313 8832314 </p>
                <p>Email: granjaagroturisticavillamaria@gmail.com</p>
                <a
                    href="https://wa.me/3138832314?text=Hola,%20me%20gustaría%20hacer%20una%20reserva%20en%20la%20Granja%20Agroturistica%20Villa%20Maria"
                    className="reservar-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Reservar
                </a>
            </div>
            <div className="ubicacion-map">
                <iframe
                    title="Ubicación en Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d17950.24448192287!2d-73.83249200927752!3d5.601993016545577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzUnMjcuNyJOIDczwrA0OScxMC45Ilc!5e1!3m2!1ses!2sco!4v1725575342744!5m2!1ses!2sco"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactoUbicacion;
