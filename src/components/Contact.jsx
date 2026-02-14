import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { motion } from "framer-motion";

function Contact() {
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            ease: "easeOut" 
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          CONTÁCTANOS
        </motion.h2>

        <motion.div 
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Columna Izquierda - Info de Contacto */}
          <div className="contact-info">
            {/* Dirección */}
            <motion.div 
              className="contact-block"
              variants={itemVariants}
            >
              <div className="contact-icon-large">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <p className="contact-label">Dirección</p>
                <p className="contact-value">Av. Alcides Vigo Mz. D LT. 41 SMP - Lima</p>
              </div>
            </motion.div>

            {/* Emails */}
            <motion.div 
              className="contact-block"
              variants={itemVariants}
            >
              <div className="contact-icon-large">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <p className="contact-label">Correos Electrónicos</p>
                <p className="contact-value">COMERCIAL@JYJSAC.COM</p>
                <p className="contact-value">JFRECH@JYJSAC.COM</p>
              </div>
            </motion.div>

            {/* Teléfonos */}
            <motion.div 
              className="contact-block"
              variants={itemVariants}
            >
              <div className="contact-icon-large">
                <FaPhone />
              </div>
              <div className="contact-details">
                <p className="contact-label">Teléfonos</p>
                <p className="contact-value">989 - 028 - 017</p>
                <p className="contact-value">977 - 147 - 748</p>
              </div>
            </motion.div>
          </div>

          {/* Columna Derecha - Redes Sociales */}
          <motion.div 
            className="contact-social-column"
            variants={itemVariants}
          >
            <h3 className="social-title">Síguenos</h3>
            
            <motion.a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-card"
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFacebook className="social-icon" />
              <span>J&J SAC - Servicios Generales</span>
            </motion.a>

            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-card"
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaLinkedin className="social-icon" />
              <span>SERVICIOS GENERALES J&J S.A.C.</span>
            </motion.a>

            <motion.a 
              href="https://jyjsac.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-card"
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGlobe className="social-icon" />
              <span>www.jyjsac.com</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
