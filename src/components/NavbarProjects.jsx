import { useNavigate } from 'react-router-dom';
import logo from "../img/logojyj.png";

function NavbarProjects() {
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    navigate('/', { state: { scrollTo: sectionId } });
  };

  return (
    <nav className="navbar">
      
      {/* LOGO + TEXTO */}
      <div className="logo-container" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="J&J Logo" className="logo-img" />
        <span className="logo-text">J&J SERVICIOS</span>
      </div>

      <ul className="nav-links">
        <li onClick={() => goToSection('servicios')} style={{ cursor: 'pointer' }}>
          Servicios
        </li>
        <li onClick={() => navigate('/projects')} style={{ cursor: 'pointer' }}>
          Proyectos
        </li>
        <li>Clientes</li>
        <li onClick={() => goToSection('contacto')} style={{ cursor: 'pointer' }}>
          Contacto
        </li>
      </ul>

      <button className="btn-nav" onClick={() => goToSection('contacto')}>Llámanos</button>
    </nav>
  );
}

export default NavbarProjects;
