import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/logo-jh.png';
import PropTypes from 'prop-types';
import { openContactChatButton } from './ContactChatButton';

const NavBar = ({ activeSection = '', setActiveSection = () => {} }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDigitalTV = location.pathname === '/digital-tv-dashboard';
  const isCloudVPS = location.pathname === '/cloud-vps-selection';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveSection(location.pathname.substring(1));
  }, [location, setActiveSection]);

  const handleLogoClick = () => {
    if (location.pathname === '/ssh-account-creation') {
      navigate('/#hero');
    } else {
      navigate('/');
    }
  };

  const handleCloseMenu = () => setIsOpen(false);

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`relative text-gray-300 hover:text-white font-medium transition-colors duration-300 ${
        activeSection === to.substring(1) ? 'text-yellow-500' : ''
      }`}
      onClick={(e) => {
        e.preventDefault();
        setActiveSection(to.substring(1));
        setIsOpen(false); // Cierra el menú al hacer clic en un enlace
        if (to.startsWith('/#')) {
          const section = document.getElementById(to.substring(2));
          section?.scrollIntoView({ behavior: 'smooth' });
        } else if (to === '/price-card-ssh') {
          navigate('/ssh-account-creation');
          setTimeout(() => {
            const section = document.getElementById('price-card-ssh');
            section?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          navigate(to);
        }
      }}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        animate={{ scaleX: activeSection === to.substring(1) ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );

  NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  const DonationButton = () => (
    <a
      href="https://ceneka.net/JHServices"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-yellow-500 transition-all duration-300 border border-yellow-500 rounded-full shadow-lg hover:text-white hover:bg-yellow-600 hover:shadow-2xl"
    >
      Donar
      <span className="absolute inset-0 w-full h-full bg-yellow-600/20 blur-md rounded-full"></span>
    </a>
  );

  return (
<nav
  className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
    scrolled && !isOpen ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
  } ${isOpen ? 'bg-black' : ''}`}
  style={{ height: '80px' }}
>
  <div className="w-full px-4 py-4 flex justify-between items-center">
    {/* Logo */}
    <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
      <div className="logo" onClick={handleLogoClick}>
        <img
          src={logo}
          alt="Logo"
          className="h-10 md:h-12"
          style={{ userSelect: 'none', pointerEvents: 'none' }}
          draggable="false"
        />
      </div>
    </motion.div>

    {/* Desktop Links */}
    <div className="hidden md:flex space-x-8 items-center">
      <NavLink to="/">Inicio</NavLink>
      {!isDigitalTV && !isCloudVPS && activeSection !== 'ssh-account-creation' && (
        <NavLink to="/#servicios">Servicios</NavLink>
      )}
      {!isDigitalTV && !isCloudVPS && (activeSection === 'ssh-account-creation' ? (
        <NavLink to="/price-card-ssh">Precios</NavLink>
      ) : (
        <NavLink to="/#precios">Precios</NavLink>
      ))}
      <button onClick={openContactChatButton}>Contacto</button>
      <DonationButton />
    </div>

    {/* Mobile Menu Button */}
    <motion.button
      className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md"
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </motion.button>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 bottom-0 w-3/4 bg-black z-40 shadow-lg"
        >
          <div className="flex justify-end p-4">
            <button
              onClick={handleCloseMenu}
              aria-label="Cerrar menú"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 py-6">
            <NavLink to="/">Inicio</NavLink>
            {!isDigitalTV && !isCloudVPS && activeSection !== 'ssh-account-creation' && (
              <NavLink to="/#servicios">Servicios</NavLink>
            )}
            {!isDigitalTV && !isCloudVPS && (activeSection === 'ssh-account-creation' ? (
              <NavLink to="/price-card-ssh">Precios</NavLink>
            ) : (
              <NavLink to="/#precios">Precios</NavLink>
            ))}
            <button onClick={openContactChatButton}>Contacto</button>
            <DonationButton />
          </div>
        </motion.div>
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={handleCloseMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </>
    )}
  </AnimatePresence>
</nav>

  );
};

NavBar.propTypes = {
  activeSection: PropTypes.string,
  setActiveSection: PropTypes.func,
};

export default NavBar;
