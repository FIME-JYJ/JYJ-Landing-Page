import logo from "../img/logojyj.png";

function Navbar() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      
      {/* LOGO + TEXTO */}
      <div className="logo-container">
        <img src={logo} alt="J&J Logo" className="logo-img" />
        <span className="logo-text">J&J SERVICIOS</span>
      </div>

      <ul className="nav-links">
        <li onClick={() => scrollToSection('servicios')} style={{ cursor: 'pointer' }}>
          Servicios
        </li>
        <li>Proyectos</li>
        <li>Clientes</li>
        <li onClick={() => scrollToSection('contacto')} style={{ cursor: 'pointer' }}>
          Contacto
        </li>
      </ul>

      <button className="btn-nav">Llámanos</button>
    </nav>
  );
}

export default Navbar;
