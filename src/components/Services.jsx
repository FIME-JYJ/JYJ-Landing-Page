import { FaBuilding, FaCog, FaIndustry, FaBolt, FaTools } from 'react-icons/fa';
import { MdSecurity, MdWaterDrop, MdLocalFireDepartment } from 'react-icons/md';
import { GiSecurityGate, GiPaintBrush } from 'react-icons/gi';
import { BsDropletFill } from 'react-icons/bs';

function Services() {
  const services = [
    {
      id: 1,
      title: "REMODELACIÓN ARQUITECTÓNICA",
      description: "Diseño y ejecución de proyectos de locales comerciales.",
      category: "arquitectura",
      icon: <FaBuilding />
    },
    {
      id: 2,
      title: "MECÁNICA ELECTROMECÁNICA",
      description: "Instalación, mantenimiento y reparación de equipos de todo taller (hidráulicos, neumáticos y de bombeo).",
      category: "mecanica",
      icon: <FaCog />
    },
    {
      id: 3,
      title: "ESTRUCTURAS METÁLICAS",
      description: "Instalación, mantenimiento y fabricación de techos estructurados, mesamines entre otros.",
      category: "estructuras",
      icon: <FaIndustry />
    },
    {
      id: 4,
      title: "INSTALACIONES ELÉCTRICAS",
      description: "Instalación de circuitos de tendidos eléctricos de baja y media tensión. Instalación de pozos a tierra, instalación de tableros eléctricos, instalación de luminarias, mantenimiento de subestaciones entre otros.",
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
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
