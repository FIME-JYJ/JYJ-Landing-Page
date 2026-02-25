import React from "react";


import lineaLogo from "../img/logos/Linealogo.png";
import logMcolibri from "../img/logos/LogMcolibri.png";
import maerskLogo from "../img/logos/Maersk_Group_Logo.svg.png";
import mariaMercedes from "../img/logos/maria-mercedes.png"; 
import swissportLogo from "../img/logos/Swissport-Logo.png"; 
import universalLogo from "../img/logos/logouniversal.webp"; 

const logos = [
  { src: lineaLogo, alt: "Linea Logo" },
  { src: logMcolibri, alt: "Log Mcolibri" },
  { src: maerskLogo, alt: "Maersk Group" },
  { src: mariaMercedes, alt: "Maria Mercedes" },
  { src: swissportLogo, alt: "Swissport" },
  { src: universalLogo, alt: "Universal" },
];

const NavbarClientes = () => {
  
  // codigo para duplicar imagenes que sirven para el carrusel

  const duplicated = [...logos, ...logos];

  return (
    <section className="clientes-section">
      <h2 className="clientes-titulo">Nuestros Clientes</h2>
      <div className="carrusel-wrapper">
        <div className="carrusel-track">
          {duplicated.map((logo, index) => (
            <div className="carrusel-item" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavbarClientes;