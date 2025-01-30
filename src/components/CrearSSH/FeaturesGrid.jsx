import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Zap, Users, Lock } from 'lucide-react';
import PropTypes from 'prop-types';

const FeaturesGrid = ({ animationVariants }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <motion.div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto" {...animationVariants.fadeIn}>
      {[
        {
          icon: <Zap className="h-8 w-8" />,
          title: "Velocidad Ultra Rápida",
          description: "Conexión garantizada de 1Gb/s con mínima latencia",
          color: "from-teal-400 to-cyan-600"
        },
        {
          icon: <Users className="h-8 w-8" />,
          title: "Multi-Usuario",
          description: "Soporte para 2 conexiones simultáneas sin pérdida de velocidad",
          color: "from-purple-400 to-indigo-600"
        },
        {
          icon: <Lock className="h-8 w-8" />,
          title: "Seguridad Avanzada",
          description: "Cifrado de grado militar y protección contra amenazas",
          color: "from-indigo-400 to-purple-600"
        }
      ].map((feature, index) => (
        <div key={index} className="relative group" data-aos="fade-up" data-aos-delay={index * 100}>
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r opacity-75 group-hover:opacity-100 transition duration-300 blur-sm"></div>
          <div className="relative p-8 space-y-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

FeaturesGrid.propTypes = {
  animationVariants: PropTypes.object.isRequired,
};

export default FeaturesGrid;