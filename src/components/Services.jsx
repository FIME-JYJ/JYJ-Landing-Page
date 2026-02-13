import { FaBuilding, FaCog, FaIndustry, FaBolt, FaTools } from 'react-icons/fa';
import { MdSecurity, MdWaterDrop, MdLocalFireDepartment } from 'react-icons/md';
import { GiSecurityGate, GiPaintBrush } from 'react-icons/gi';
import { BsDropletFill } from 'react-icons/bs';
import remodelacionImg from "../img/remodelacion.jpeg";

function Services() {

  const services = [
    {
      id: 1,
      title: "REMODELACIÓN ARQUITECTÓNICA",
      description: "Diseño y ejecución de proyectos de locales comerciales.",
      category: "arquitectura",
      icon: <FaBuilding />,
      image: remodelacionImg,
    },
    {
      id: 2,
      title: "MECÁNICA ELECTROMECÁNICA",
      description: "Instalación, mantenimiento y reparación de equipos hidráulicos, neumáticos y de bombeo.",
      category: "mecanica",
      icon: <FaCog />
    },
    {
      id: 3,
      title: "ESTRUCTURAS METÁLICAS",
      description: "Instalación, mantenimiento y fabricación de techos estructurados y mezzanines.",
      category: "estructuras",
      icon: <FaIndustry />
    },
    {
      id: 4,
      title: "INSTALACIONES ELÉCTRICAS",
      description: "Instalación de circuitos eléctricos de baja y media tensión, pozos a tierra, tableros eléctricos, luminarias y mantenimiento de subestaciones.",
      category: "electricas",
      icon: <FaBolt />
    },
    {
      id: 5,
      title: "SERVICIOS GENERALES",
      description: [
        { text: "Cámaras de seguridad", icon: <MdSecurity /> },
        { text: "Sistema de intrusión", icon: <GiSecurityGate /> },
        { text: "Pintado industrial", icon: <GiPaintBrush /> },
        { text: "Saneamiento de cisterna de agua", icon: <BsDropletFill /> },
        { text: "Instalaciones de agua y desagüe", icon: <MdWaterDrop /> },
        { text: "Sistemas de detección contra incendios", icon: <MdLocalFireDepartment /> }
      ],
      category: "generales",
      isList: true,
      icon: <FaTools />
    }
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        <h2 className="services-title">NUESTROS SERVICIOS</h2>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">

              {/* Imagen si existe */}
              {service.image && (
                <div className="service-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                  />
                </div>
              )}

              {/* Icono */}
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              {/* Descripción o Lista */}
              {service.isList ? (
                <ul className="service-list">
                  {service.description.map((item, index) => (
                    <li key={index}>
                      <span className="list-icon">{item.icon}</span>
                      <span className="list-text">{item.text}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{service.description}</p>
              )}

              {/* MÁS INFORMACIÓN */}
              <div className="service-more">
                Más información <span className="arrow">→</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
