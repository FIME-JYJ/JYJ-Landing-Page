import portada from "../img/portadalanding.jpeg";

function Hero() {
  return (
     <section
  className="hero"
  style={{ backgroundImage: `url(${portada})` }}
>


      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Soluciones Integrales en
            <br />
            Ingeniería, Construcción y
            <br />
            Mantenimiento
          </h1>

          <p>
            Resolviendo las necesidades de infraestructura de su empresa
            con altos estándares de calidad y sostenibilidad.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Nuestros Servicios</button>
            <button className="btn-outline">Contáctanos</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
