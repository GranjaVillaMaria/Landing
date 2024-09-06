import React, { useState } from 'react';
import './preguntas.css';
import { FaPlus, FaMinus, FaStar } from 'react-icons/fa';

const PreguntasResenas = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const preguntas = [
        {
            pregunta: '¿Cuál es el horario de atención de la granja Villa Maria?',
            respuesta: 'La Granja Villa Maria está abierta para visitantes de lunes a viernes (bajo reserva previa) desde las 9:30 a.m. hasta las 5:00 p.m., fines de semana y festivos desde las 9:30 a.m. hasta las 5:00 p.m. Estos horarios pueden variar según la temporada.'
        },
        {
            pregunta: '¿Necesito hacer una reserva previa para visitar?',
            respuesta: 'Sí, recomendamos hacer reservas previas para asegurar tu lugar, especialmente para visitas entre semana, durante la temporada alta y para actividades especiales como visita a los animales, o servicio de alojamiento.Puedes hacer tu reserva <a href="https://wa.me/3138832314?text=Hola,%20me%20gustaría%20hacer%20una%20reserva%20en%20la%20Granja%20Agroturistica%20Villa%20Maria" target="_blank" class="whatsapp-link">aquí</a>.'
        },
        {
            pregunta: '¿Qué actividades se pueden realizar en la Granja Villa Maria?',
            respuesta: '¡Vive una experiencia inolvidable en la Finca Villa Maria! Ya sea que vengas por un día o elijas alojarte, te espera un sinfín de aventuras. Conoce de cerca animales fascinantes como búfalos, llamas y avestruces, o disfruta de emocionantes paseos a caballo. Si buscas adrenalina, nuestra cancha de paintball es perfecta para ti. También contamos con un salón de eventos ideal para tus celebraciones, con un servicio de restaurante completo. Para los amantes de la acción, ¡tenemos cuatrimotos para recorrer la finca! Y si prefieres una experiencia más tranquila, únete a nuestras caminatas ecológicas con amigos o familiares. ¡Cada actividad en la Granja Villa María quedará grabada en tus recuerdos para siempre!'
        },
        {
            pregunta: '¿La Granja es apta para niños?',
            respuesta: 'Absolutamente, La Granja Agroturistica Villa Maria es un destino familiar donde niños de todas las edades pueden disfrutar y aprender de la naturaleza.'
        },
    ];

    const reseñas = [
        {
            nombre: 'Juan Diego Garcia',
            reseña: 'Excelente lugar, disfruté mucho la estadía y el servicio fue impecable.',
            calificacion: 5
        },
        {
            nombre: 'Camila Ruiz Roldan',
            reseña: 'Un sitio hermoso, ideal para desconectarse de la rutina y disfrutar de la naturaleza.',
            calificacion: 4
        }
    ];

    const togglePregunta = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="preguntas-resenas-container">
            <div className="preguntas-container">
                <h2 className="titulo">Preguntas Frecuentes</h2>
                {preguntas.map((item, index) => (
                    <div key={index} className={`pregunta-item ${activeIndex === index ? 'active' : ''}`}>
                        <div className="pregunta-header" onClick={() => togglePregunta(index)}>
                            <h3>{item.pregunta}</h3>
                            {activeIndex === index ? <FaMinus /> : <FaPlus />}
                        </div>
                        <div className="pregunta-respuesta">
                            <p dangerouslySetInnerHTML={{ __html: item.respuesta }} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="resenas-container">
                <h2 className="titulo">Reseñas</h2>
                {reseñas.map((item, index) => (
                    <div key={index} className="resena-item">
                        <div className="resena-texto">
                            <h4>{item.nombre}</h4>
                            <p>{item.reseña}</p>
                        </div>
                        <div className="resena-estrellas">
                            {[...Array(5)].map((star, i) => (
                                <FaStar
                                    key={i}
                                    className={i < item.calificacion ? 'estrella llena' : 'estrella vacia'}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PreguntasResenas;