import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import PropTypes from 'prop-types';

const UserCount = ({ stats, animationVariants }) => {
  const getColorClass = (ratio) => {
    if (ratio < 0.5) return 'from-green-500 to-emerald-700';
    if (ratio < 0.75) return 'from-yellow-500 to-orange-600';
    return 'from-red-600 to-pink-700';
  };

  const getTextClass = (ratio) => {
    if (ratio < 0.5) return 'text-green-500';
    if (ratio < 0.75) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getMessage = (ratio) => {
    if (ratio < 0.5) return 'Hay muchos cupos disponibles';
    if (ratio < 0.75) return 'Cupos empezando a agotarse';
    return 'Cupos agotados';
  };

  const ratio = stats.totalUsuarios / stats.limite;

  return (
    <motion.div 
      {...animationVariants.fadeIn} 
      role="status" 
      aria-live="polite"
    >
      <div className="relative p-8 bg-black rounded-xl flex flex-col items-center justify-center space-y-4 shadow-lg">
        <Users className="h-12 w-12 text-[#00ADB5] animate-pulse" aria-hidden="true" />
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#E5E5E5] mb-2">Usuarios Creados</h3>
          <div 
            className={`text-5xl font-extrabold bg-gradient-to-r ${getColorClass(ratio)} bg-clip-text text-transparent`}
          >
            {stats.totalUsuarios} <span className="text-gray-500">/ {stats.limite}</span>
          </div>
          <div 
            className={`mt-4 text-sm font-semibold ${getTextClass(ratio)}`}
          >
            {getMessage(ratio)}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

UserCount.propTypes = {
  stats: PropTypes.shape({
    totalUsuarios: PropTypes.number.isRequired,
    limite: PropTypes.number.isRequired,
  }).isRequired,
  animationVariants: PropTypes.object.isRequired,
};

export default UserCount;