import { Server } from 'lucide-react';
import logo from '../../images/logo-jh.png'; // Importa el logo
import PropTypes from 'prop-types';

const HeroSection = () => {
  const product = {
    title: "Servidores VPN",
    description: "Conexiones ultra seguras con tecnología militar de última generación",
    icon: Server,
    accent: "from-neutral-800 to-neutral-900"
  };

  const ProductDisplay = ({ product }) => (
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
        <p className="text-xl md:text-2xl text-neutral-300 mb-16 max-w-3xl font-medium drop-shadow">
          {product.description}
        </p>
      </div>
    </div>
  );

  ProductDisplay.propTypes = {
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      accent: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-start justify-start py-32 overflow-hidden hero-background">
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
            />
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
            <p className="text-sm text-neutral-400 font-medium">JHServices 2024</p>
          </div>
        </div>
      </div>

      {/* Sección de Producto */}
      <div className="relative z-10 w-full h-full pt-16">
        <ProductDisplay product={product} />
      </div>
    </section>
  );
};

export default HeroSection;