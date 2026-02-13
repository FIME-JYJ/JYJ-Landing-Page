import { FaBuilding, FaCog, FaIndustry, FaBolt, FaTools } from 'react-icons/fa';
import { MdSecurity, MdWaterDrop, MdLocalFireDepartment } from 'react-icons/md';
import { GiSecurityGate, GiPaintBrush } from 'react-icons/gi';
import { BsDropletFill } from 'react-icons/bs';
import { motion } from "framer-motion";
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

  // Variantes de animación para el contenedor
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Variantes para cada tarjeta
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        {/* TÍTULO ANIMADO */}
        <motion.h2
          className="services-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            ease: "easeOut" 
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          NUESTROS SERVICIOS
        </motion.h2>

        {/* GRID DE SERVICIOS CON STAGGER */}
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Imagen */}
              {service.image && (
                <motion.div 
                  className="service-image-container"
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: false }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                  />
                </motion.div>
              )}

              {/* Icono */}
              <motion.div 
                className="service-icon"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: false }}
              >
                {service.icon}
              </motion.div>

              {/* Título */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                viewport={{ once: false }}
              >
                {service.title}
              </motion.h3>

              {/* Descripción */}
              {service.isList ? (
                <motion.ul 
                  className="service-list"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: false }}
                >
                  {service.description.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + 0.5 + (idx * 0.05)
                      }}
                      viewport={{ once: false }}
                    >
                      <span className="list-icon">{item.icon}</span>
                      <span className="list-text">{item.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: false }}
                >
                  {service.description}
                </motion.p>
              )}

              {/* Botón "Más información" */}
              <motion.div 
                className="service-more"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                viewport={{ once: false }}
                whileHover={{ x: 5 }}
              >
                Más información <span className="arrow">→</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;