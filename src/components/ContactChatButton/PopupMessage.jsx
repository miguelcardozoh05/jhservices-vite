import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const PopupMessage = ({ popupMessage }) => {
  if (!popupMessage) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="absolute bottom-full right-0 mb-3 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="relative">
          {/* Flecha luminosa */}
          <div
            className="absolute -bottom-2 right-6 w-0 h-0
              border-l-8 border-l-transparent
              border-r-8 border-r-transparent
              border-t-8 border-t-cyan-400
              drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
          />

          {/* Contenedor del mensaje */}
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-md
              text-white px-5 py-3 rounded-xl shadow-[0_8px_30px_rgba(0,255,255,0.2)]
              flex items-center gap-4 border border-cyan-500/40 hover:border-cyan-400
              transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            {/* Mensaje */}
            <span className="text-sm font-semibold text-cyan-100 tracking-wide">
              {popupMessage}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

PopupMessage.propTypes = {
  popupMessage: PropTypes.string,
};

export default PopupMessage;
