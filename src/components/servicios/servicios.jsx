import React, { useState } from 'react';
import './servicios.css';
import pintball from '../../images/paintball.png';
import cuatrimoto from '../../images/cuatrimoto.png';
import avestruz from '../../images/avestruz.png';
import eventos from '../../images/eventos.png';

const servicesData = [
    {
        title: 'Caminatas ecológicas',
        icon: '🚶',
        description: 'Explora nuestros senderos con una caminata guiada por la finca.',
    },
    {
        title: 'Paseos a Caballo',
        icon: '🐴',
        description: 'Disfruta de un relajante paseo a caballo por la finca.',
    },
    {
        title: 'Alojamiento Rural',
        icon: '🏡',
        description: 'Disfruta de una estancia confortable en nuestra casa ecológica.',
    },
    {
        title: 'Actividades al Aire Libre',
        icon: '🌳',
        description: 'Participa en senderismo, alimentar los animales y otras actividades naturales.',
    },
    {
        title: 'Experiencia de Granja',
        icon: '🐓',
        description: 'Interactúa con animales y conoce el funcionamiento de una granja.',
    },
    {
        title: 'Paintball',
        icon: <img src={pintball} alt="Paintball" className="service-image" />,
        description: 'Vive la emoción del paintball en nuestro campo diseñado para la acción.',
    },
    {
        title: 'Restaurante',
        icon: '🍽️',
        description: 'Disfruta de deliciosa comida local en nuestro restaurante campestre.',
    },
    {
        title: 'Aventura en Cuatrimoto',
        icon: <img src={cuatrimoto} alt="Cuatrimoto" className="service-image" />,
        description: 'Disfruta de emocionantes recorridos en cuatrimoto por nuestros senderos.',
    },
    {
        title: 'Encuentro con Avestruces',
        icon: <img src={avestruz} alt="Avestruz" className="service-image" />,
        description: 'Conoce y convive con nuestras avestruces y otros animales como búfalos y llamas.',
    },
    {
        title: 'Salón de Eventos',
        icon: <img src={eventos} alt="Salón de Eventos" className="service-image" />,
        description: 'Organiza tus eventos en nuestro espacioso salón, ideal para cualquier ocasión.',
    },
];

const Servicios = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleCardClick = () => {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 4000);
    };

    return (
        <div className="services-container">
            <div className="services-title-container">
                <h2 className="services-title">Nuestros Servicios</h2>
            </div>
            {servicesData.map((service, index) => (
                <div
                    key={index}
                    className="service-card"
                    onClick={handleCardClick}
                >
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                </div>
            ))}
            {showMessage && (
                <div className="notification">
                    Si quieres saber más, no dudes en contactarnos.
                </div>
            )}
        </div>
    );
};

export default Servicios;
