import React from 'react';
import { Cloud, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo-jh.png'; // Importa el logo

const product = {
  title: "Cloud VPS",
  description: "Potencia inigualable en la nube con tecnología de vanguardia",
  icon: Cloud,
  accent: "from-neutral-800 to-neutral-900"
};

const HeroSection = ({ handleScrollToServices }) => {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-start justify-start py-40 overflow-hidden hero-background" // Ajusta py-32 a py-40
    >
      {/* Logo fijo */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20"> {/* Ajusta bottom-10 a bottom-16 */}
        {/* Fondo degradado fuera del contenedor (luces de fondo) */}
        <div className="absolute inset-0 -z-10 h-48 w-48 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 blur-3xl opacity-50"></div>
        
        {/* Contenedor del logo */}
        <div className="p-8 rounded-2xl bg-gradient-to-b from-neutral-900/80 to-black border border-neutral-800/50 backdrop-blur-sm shadow-2xl">
          <div className="flex flex-col items-center gap-4">
            <img 
              src={logo}
              alt="Logo"
              className="w-24 h-24 object-contain drop-shadow-lg"
              style={{ userSelect: 'none', pointerEvents: 'none' }} // Deshabilitar selección e interacción
              draggable="false" // Deshabilitar arrastre
            />
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
            <p className="text-sm text-neutral-400 font-medium" style={{ userSelect: 'none' }}>JHServices 2024</p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-8 lg:px-12">
        <div className="relative p-12 md:p-20 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="p-6 rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700 shadow-lg shadow-black/50">
              <product.icon size={48} className="text-neutral-200" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 drop-shadow-lg">
              {product.title}
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-neutral-300 mb-20 max-w-3xl font-medium drop-shadow"> {/* Ajusta mb-16 a mb-20 */}
            {product.description}
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-40"> {/* Ajusta mb-32 a mb-40 */}
            <button
              className="group flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-lg
                bg-gradient-to-b from-white to-neutral-200 text-black shadow-lg shadow-black/30 
                transition-all duration-200 hover:shadow-xl hover:shadow-black/40"
              onClick={handleScrollToServices}
            >
              Empezar ahora
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;