import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Cloud, Tv, Code, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo-jh.png';

const products = [
  {
    title: "Servidores VPN",
    description: "Conexiones ultra seguras con tecnología militar de última generación",
    icon: Server,
    accent: "from-neutral-800 to-neutral-900"
  },
  {
    title: "Cloud VPS",
    description: "Potencia inigualable en la nube con tecnología de vanguardia",
    icon: Cloud,
    accent: "from-neutral-800 to-neutral-900"
  },
  {
    title: "TV Digital",
    description: "Tu entretenimiento sin límites con calidad cinematográfica",
    icon: Tv,
    accent: "from-neutral-800 to-neutral-900"
  },
  {
    title: "Desarrollo Web",
    description: "Creamos tu presencia digital con tecnologías innovadoras",
    icon: Code,
    accent: "from-neutral-800 to-neutral-900"
  }
];

const HeroSection = ({ handleScrollToServices }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlowing, setIsGlowing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleButtonClick = (product) => {
    if (product.title === "TV Digital") {
      navigate('/digital-tv-dashboard');
    } else if (product.title === "Cloud VPS") {
      navigate('/cloud-vps-selection');
    } else {
      handleScrollToServices();
    }
  };

  const ProductDisplay = ({ product }) => (
    <motion.div
      className="relative w-full h-full max-w-7xl mx-auto px-8 lg:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative p-12 md:p-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-8 mb-16"
        >
          <div className="p-6 rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700 shadow-lg shadow-black/50">
            <product.icon size={48} className="text-neutral-200" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 drop-shadow-lg">
            {product.title}
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-neutral-300 mb-16 max-w-3xl font-medium drop-shadow"
        >
          {product.description}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 justify-center mb-32"
        >
          <motion.button
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-lg
              bg-gradient-to-b from-white to-neutral-200 text-black shadow-lg shadow-black/30 
              transition-all duration-200 hover:shadow-xl hover:shadow-black/40"
            onClick={() => handleButtonClick(product)}
          >
            Empezar ahora
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
          {product.title === "Servidores VPN" && (
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-lg font-bold rounded-lg border-2 border-neutral-700 text-white
                shadow-lg shadow-black/20 backdrop-blur-sm hover:bg-white/5 
                transition-all duration-200 hover:shadow-xl hover:shadow-black/30"
              onClick={() => navigate('/ssh-account-creation')}
            >
              Más información
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      className="relative w-full min-h-screen flex flex-col items-start justify-start py-32 overflow-hidden hero-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Logo fijo - Ajustes de espacio y contenedor */}
      {/* 
        AJUSTES DE ESPACIO:
        1. Cambia bottom-16 a bottom-32 para bajar más el logo
        2. Aumenta el padding-bottom del contenedor a pb-48 para dar más espacio
        3. Ajusta h-64 w-64 en el div del efecto de luz para hacerlo más grande
        4. Modifica scale-125 a scale-150 para una expansión mayor del efecto
        Estos valores se pueden ajustar según necesites más o menos espacio
      */}
      <div 
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20"
        onMouseEnter={() => setIsGlowing(true)}
      >
        {/* Fondo degradado con mayor área de efecto */}
        <div 
          className={`absolute inset-0 -z-10 h-40 w-40 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 blur-3xl transition-all duration-700 ${
            isGlowing ? 'opacity-100 scale-150' : 'opacity-50 scale-100'
          }`}
        ></div>
        
        {/* Contenedor del logo con padding adicional */}
        <div 
          className={`p-8 rounded-2xl bg-gradient-to-b from-neutral-900/80 to-black border backdrop-blur-sm shadow-2xl transition-all duration-500 ${
            isGlowing 
              ? 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.4)]' 
              : 'border-neutral-800/50'
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <img 
              src={logo}
              alt="Logo"
              className="w-24 h-24 object-contain drop-shadow-lg"
              style={{ userSelect: 'none', pointerEvents: 'none' }}
              draggable="false"
            />
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
            <p className="text-sm text-neutral-400 font-medium" style={{ userSelect: 'none' }}>JHServices 2024</p>
          </div>
        </div>
      </div>

      {/* Contenedor principal con padding adicional en la parte inferior */}
      <div className="relative z-10 w-full h-full pt-16 pb-48">
        <AnimatePresence mode="wait">
          <ProductDisplay 
            key={currentIndex} 
            product={products[currentIndex]} 
          />
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default HeroSection;