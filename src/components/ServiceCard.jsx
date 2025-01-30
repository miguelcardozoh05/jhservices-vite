import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';


const ServiceCard = ({ Icon, title, description, features, link, inDevelopment = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className={`
        relative flex flex-col justify-between overflow-hidden rounded-2xl p-6
        bg-gradient-to-b from-black to-gray-900
        border border-gray-800
        shadow-[0_4px_15px_rgba(0,0,0,0.8)]
        transform transition-all duration-500
        h-[450px] w-full
        ${isHovered ? 'shadow-[0_0_30px_rgba(255,215,100,0.4)]' : ''}
      `}
      >
        <div
          className={`absolute inset-0 pointer-events-none rounded-2xl 
            before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1
            before:bg-gradient-to-b before:from-amber-500 before:to-transparent
            after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-1
            after:bg-gradient-to-b after:from-amber-500 after:to-transparent
            transition-opacity duration-500
            ${isHovered ? 'before:opacity-100 after:opacity-100' : 'before:opacity-0 after:opacity-0'}
          `}
        ></div>
        <div
          className={`absolute inset-0 pointer-events-none rounded-2xl 
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1
            after:bg-gradient-to-r after:from-amber-500 after:to-transparent
            transition-opacity duration-500
            ${isHovered ? 'after:opacity-100' : 'after:opacity-0'}
          `}
        ></div>

        {inDevelopment && (
          <div className="absolute top-3 right-3 bg-yellow-600 text-black text-xs px-3 py-1 rounded-full font-medium shadow-md">
            En Desarrollo
          </div>
        )}

        <div className={`
          mb-6 p-4 rounded-full w-16 h-16
          bg-gradient-to-r from-gray-800 to-gray-700
          flex items-center justify-center
          transform transition-all duration-500
          ${isHovered ? 'bg-gradient-to-r from-yellow-500 to-amber-600 shadow-[0_0_20px_rgba(255,215,100,0.8)]' : ''}
        `}>
          <Icon className={`w-8 h-8 transition-all duration-500 ${isHovered ? 'text-white' : 'text-gray-500'}`} />
        </div>

        <h3 className={`
          text-xl font-extrabold mb-3
          text-transparent bg-clip-text bg-gradient-to-r
          from-gray-300 to-gray-400
          transition-all duration-500
          ${isHovered ? 'from-yellow-400 to-amber-600' : ''}
        `}>
          {title}
        </h3>

        <p className="text-gray-400 mb-4 leading-relaxed overflow-hidden h-[80px]">
          {description}
        </p>

        <ul className="space-y-2 mb-6 overflow-y-auto h-[80px] scrollbar-thin scrollbar-thumb-gray-700">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-center text-sm
              transition-colors duration-500
              ${isHovered ? 'text-amber-400' : 'text-gray-500'}
            `}>
              <span className="mr-2 text-amber-500">•</span>
              {feature}
            </li>
          ))}
        </ul>

        {inDevelopment ? (
          <span className="text-gray-500">En desarrollo</span>
        ) : (
          <a href={link} className={`
            inline-block w-full text-center py-3 rounded-lg font-semibold
            transition-all duration-500
            ${isHovered
              ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-black shadow-[0_0_25px_rgba(255,215,100,0.6)]'
              : 'bg-gradient-to-r from-gray-800 to-gray-900 text-gray-400'}
          `}>
            Más Información
          </a>
        )}
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  Icon: PropTypes.elementType.isRequired, // Icono que será renderizado
  title: PropTypes.string.isRequired, // Título de la tarjeta
  description: PropTypes.string.isRequired, // Descripción breve
  features: PropTypes.arrayOf(PropTypes.string).isRequired, // Lista de características
  link: PropTypes.string, // Enlace para más información
  inDevelopment: PropTypes.bool, // Bandera para indicar si está en desarrollo
};


const ResponsiveServiceCards = ({ cards = [] }) => {
  // Verifica que cards sea un array antes de usar .map
  if (!cards || !Array.isArray(cards)) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      {cards.map((card, index) => (
        <ServiceCard key={index} {...card} />
      ))}
    </div>
  );
};

// Validación de PropTypes
ResponsiveServiceCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      Icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string,
      inDevelopment: PropTypes.bool,
    })
  ).isRequired,
};

export default ResponsiveServiceCards;