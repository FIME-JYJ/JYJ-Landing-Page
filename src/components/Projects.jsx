import React from 'react';
import NavbarProjects from './NavbarProjects';
import proyecto1 from "../img/proyectos/proyecto1.webp";
import proyecto2 from "../img/proyectos/proyecto2.webp";
import proyecto3 from "../img/proyectos/proyecto3.webp";
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sistema Integral de Seguridad - Complejo Empresarial",
      description: "Instalación de sistema completo de seguridad: 32 cámaras de vigilancia, sistema de detección de intrusión perimetral, sistema contra incendios y control de accesos.",
      experience: "Proyecto integral de 6 meses que incluyó cableado estructurado, servidores de grabación y monitoreo 24/7. Sistema integrado con central de alarmas. Cliente reporta mejora significativa en seguridad y reducción de incidentes.",
      year: "2024",
      image: proyecto1 // Aquí va la ruta de la imagen
    },
    {
      id: 2,
      title: "Estructura Metálica - Mezzanine y Techo Industrial",
      description: "Fabricación e instalación de mezzanine de 200m² y techo estructurado metálico de 400m² para almacén industrial. Incluye escaleras de acceso y barandas de seguridad.",
      experience: "Completado en 3 meses con diseño estructural certificado. Se duplicó el espacio útil del almacén mediante el mezzanine. Estructura resistente y duradera con acabado anticorrosivo. Cliente logró optimizar su capacidad de almacenamiento significativamente.",
      year: "2024",
      image: proyecto2 // Aquí va la ruta de la imagen
    },
    {
      id: 3,
      title: "Instalación Eléctrica Industrial - Planta Manufacturera",
      description: "Instalación completa de circuitos eléctricos de media tensión, tableros de distribución, sistema de pozos a tierra y luminarias LED industriales para planta de 1500m².",
      experience: "Proyecto de 5 meses que incluyó mantenimiento de subestación existente y actualización del sistema eléctrico completo. Cumplimiento estricto de normas de seguridad y certificaciones requeridas. Reducción del 40% en consumo energético.",
      year: "2023",
      image: proyecto3 // Aquí va la ruta de la imagen
    }
  ];

  return (
    <div className="projects-page">
      <NavbarProjects />
      <header className="projects-header">
        <h1>Nuestros Proyectos</h1>
        <p>Experiencias que nos definen</p>
      </header>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Imagen del proyecto */}
            <div className="project-image-container">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-image" />
              ) : (
                <div className="project-image-placeholder">
                  <span>Imagen del proyecto</span>
                </div>
              )}
            </div>
            
            <div className="project-year">{project.year}</div>
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-experience">
              <h3>Nuestra Experiencia</h3>
              <p>{project.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
