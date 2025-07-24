import React from 'react';
import './eventos.css'; // Puedes crear este archivo para estilos personalizados
import img1 from '../lib/img/img1.png'
import img2 from '../lib/img/img2.png'
import img3 from '../lib/img/img3.png'
import Title from  '../components/title'

const eventos = [
  {
    titulo: 'Estrategias para la vinculación profesional',
    fecha: 'Inscríbete antes del 31 de julio',
    descripcion: 'Aprende herramientas estratégicas para tu proceso de búsqueda de empleo y destaca en el mercado laboral.',
    imagen: img3, // Reemplaza con la ruta correcta de la imagen del evento
  },
  {
    titulo: 'Semanas de Consultoras Nacional',
    fecha: '18 al 22 y 25 al 29 de agosto 2025',
    descripcion: 'Evento exclusivo para estudiantes del Tec de Monterrey y EXATEC para conocer y conectar con consultoras líderes.',
    imagen: img1,
  },
  {
    titulo: 'EmpleaTec Nacional 2025',
    fecha: '1 al 5 de octubre 2025',
    descripcion: 'Profesionales buscando organizaciones que están transformando el mundo. Modalidad presencial y en línea.',
    imagen: img2,
  },
];

const Eventos = () => {
  return (
    <div className="contenedor contenedor-maraton">
    <Title text="Próximos eventos" /> 
      <div className="eventos-container">
      <div className="eventos-list">
        {eventos.map((evento, idx) => (
          <div className="evento-card" key={idx}>
            <img src={evento.imagen} alt={evento.titulo} className="evento-img" />
            <div className="evento-info">
              <h3>{evento.titulo}</h3>
              <p className="evento-fecha">{evento.fecha}</p>
              <p className="evento-desc">{evento.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Eventos;
