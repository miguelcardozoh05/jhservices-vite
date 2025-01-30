import { motion } from 'framer-motion';
import { useState } from 'react';
import logo from '../images/logo-jh.png';
import fastIcon from '../images/custom.png';
import reactIcon from '../images/inyector.png';
import angularIcon from '../images/openvpn.png';
import vueIcon from '../images/ahtunel.png';
import materialIcon from '../images/darktunel.png';

const HeroSection = () => {
  const [isGlowing, setIsGlowing] = useState(false);

  const secondaryIcons = [
    { id: 1, icon: fastIcon, name: "Fast", gradient: 'from-green-500 to-green-300' },
    { id: 2, icon: reactIcon, name: "React", gradient: 'from-blue-500 to-yellow-500' },
    { id: 3, icon: angularIcon, name: "Angular", gradient: 'from-yellow-500 to-blue-500' },
    { id: 4, icon: vueIcon, name: "Vue", gradient: 'from-yellow-500 to-yellow-300' },
    { id: 5, icon: materialIcon, name: "Material", gradient: 'from-cyan-500 to-cyan-300' },
  ];

  return (
    <motion.section
      className="relative w-full min-h-screen flex flex-col items-center justify-start py-32 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      style={{
        background: `
          linear-gradient(to bottom, 
            black 0%, 
            black 30%,
            transparent 40%),
          radial-gradient(circle at 20% 80%, rgba(100, 148, 237, 0.267), transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(137, 43, 226, 0.356), transparent 40%),
          radial-gradient(circle at 50% 70%, rgba(102, 184, 175, 0.089), transparent 50%),
          linear-gradient(to bottom, transparent 60%, #000000 100%)
        `,
        backgroundBlendMode: 'screen',
      }}
    >
      {/* Logo principal */}
      <div 
        className="relative z-20 flex flex-col items-center"
        onMouseEnter={() => setIsGlowing(true)}
      >
        {/* Fondo degradado fuera del contenedor (luces de fondo) */}
        <div 
          className={`absolute inset-0 -z-10 h-48 w-48 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 blur-3xl transition-all duration-700 ${
            isGlowing ? 'opacity-100 scale-125' : 'opacity-50 scale-100'
          }`}
        ></div>
        
        {/* Contenedor del logo */}
        <div className={`p-8 rounded-2xl bg-gradient-to-b from-neutral-900/80 to-black border transition-all duration-500 ${
          isGlowing 
            ? 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.4)]' 
            : 'border-neutral-800/50'
        } backdrop-blur-sm shadow-2xl`}>
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

      {/* Resto del código igual... */}
      <div className="flex flex-wrap gap-8 mt-32 justify-center sm:gap-12 sm:mt-32 md:gap-16">
        {secondaryIcons.map((icon) => (
          <div key={icon.id} className="relative group">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${icon.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-xl`}></div>
            <div className="relative w-16 h-16 bg-neutral-900/80 rounded-xl backdrop-blur-sm flex items-center justify-center border border-neutral-800 transition-all duration-300 group-hover:border-purple-500/50 group-hover:bg-neutral-900/90 group-hover:scale-105">
              <img src={icon.icon} alt={icon.name} className="w-8 h-8 object-contain" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 text-6xl sm:text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-600">
        JHServices
      </div>
      
      <div className="text-center mt-4 text-sm sm:text-md md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-600 max-w-4xl px-4">
        Conectividad segura, servidores en la nube y entretenimiento digital a tu alcance. Descubre soluciones tecnológicas diseñadas para potenciar tu negocio y tu vida diaria.
      </div>
    </motion.section>
  );
};

export default HeroSection;