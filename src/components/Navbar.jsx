function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">J&J SERVICIOS</div>

      <ul className="nav-links">
        <li onClick={() => scrollToSection('servicios')} style={{ cursor: 'pointer' }}>Servicios</li>
        <li>Proyectos</li>
        <li>Clientes</li>
        <li>Contacto</li>
      </ul>

      <button className="btn-nav">Llámanos</button>
    </nav>
  );
}

export default Navbar;
