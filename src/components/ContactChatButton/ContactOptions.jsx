import React from 'react';
import { HelpCircle, ArrowUp } from 'lucide-react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ContactOptions = ({ contacts }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute bottom-20 right-0 w-72 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.2)] overflow-hidden"
    >
      {/* Fondo con efecto de gradiente y brillo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_60%)]" />
      </div>

      <div className="relative p-5 border border-cyan-500/30 backdrop-blur-sm">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-4">
          <motion.h3
            className="text-xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-2 rounded-full bg-cyan-500/10 shadow-inner mr-2">
              <HelpCircle className="w-6 h-6 text-cyan-300" />
            </div>
            ¿Necesitas ayuda?
          </motion.h3>
        </div>

        <p className="text-sm text-gray-300 mb-6">
          Estamos aquí para ayudarte. Elige tu canal de contacto preferido:
        </p>

        {/* Lista de contactos */}
        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <motion.button
              key={index}
              onClick={() => contact.link && window.open(contact.link, '_blank')}
              className="w-full flex items-center justify-between p-3 rounded-lg
                bg-gradient-to-r from-gray-800/50 to-gray-700/50
                hover:from-cyan-500/10 hover:to-blue-500/10
                border border-cyan-500/20 hover:border-cyan-500/50
                transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 shadow-inner">
                  {React.cloneElement(contact.icon, {
                    className: 'w-5 h-5 text-cyan-300 group-hover:text-cyan-100',
                  })}
                </div>
                <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                  {contact.name}
                </span>
              </div>
              <motion.div
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                className="group-hover:opacity-100 opacity-0 transition-opacity"
              >
                <ArrowUp className="w-5 h-5 text-cyan-300 group-hover:text-cyan-100" />
              </motion.div>
            </motion.button>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-400 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-2 rounded-lg">
            Respondemos en menos de 24 horas ⚡
          </p>
        </div>
      </div>
    </motion.div>
  );
};

ContactOptions.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
      icon: PropTypes.element.isRequired,
    })
  ).isRequired,
};

export default ContactOptions;
