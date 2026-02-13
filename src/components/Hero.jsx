import portada from "../img/portadalanding.webp";

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
     <section
  className="hero"
  style={{ backgroundImage: `url(${portada})` }}
>


      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <h1>
            <span className="no-wrap">Soluciones Integrales en</span> <br />
            Ingeniería, Construcción y <br />
            Mantenimiento
          </h1>

          <p>
            Resolviendo las necesidades de infraestructura de su empresa
            con altos estándares de calidad y sostenibilidad.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('servicios')}>Nuestros Servicios</button>
            <button className="btn-outline">Contáctanos</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
