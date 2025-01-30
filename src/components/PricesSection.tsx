import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css'; // Asegúrate de importar el archivo CSS

const PricingCarousel = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  const categories = [
    {
      name: "Servidores VPN",
      icon: "🔒",
      plans: [
        { name: "VPN Básico", price: "2.000", features: ["1 Dispositivo", "5 Ubicaciones", "Soporte 24/7"] },
        { name: "VPN Pro", price: "3.000", features: ["3 Dispositivos", "20 Ubicaciones", "Soporte Prioritario"] },
        { name: "VPN Premium", price: "5.000", features: ["5 Dispositivos", "Ubicaciones Ilimitadas", "Soporte VIP"] }
      ]
    },
    {
      name: "Cloud VPS",
      icon: "☁️",
      plans: [
        { name: "VPS Starter", price: "12.000", features: ["1 CPU", "1GB RAM", "50GB SSD"] },
        { name: "VPS Business", price: "15.000", features: ["2 CPU", "2GB RAM", "100GB SSD"] },
        { name: "VPS Enterprise", price: "20.000", features: ["2 CPU", "4GB RAM", "200GB SSD"] }
      ]
    },
    {
      name: "TV Digital",
      icon: "📺",
      plans: [
        { name: "TV Básico", price: "3.000", features: ["300+ Canales", "HD", "1 Pantalla"] },
        { name: "TV Familiar", price: "5.000", features: ["300+ Canales", "Full HD", "2 Pantallas"] },
        { name: "TV Premium", price: "7.000", features: ["300+ Canales", "4K", "3 Pantallas"] }
      ]
    }
  ];

  const nextCategory = () => setActiveCategory((prev) => (prev + 1) % categories.length);
  const prevCategory = () => setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 font-[Inter] text-white relative overflow-hidden">
      {/* Fondo extendido con gradientes de luz */}
      <div className="fondo-extendido">
        <div className="gradiente-morado"></div>
        <div className="gradiente-celeste"></div>
        <div className="gradiente-verde"></div>
      </div>

      <div className="relative">
        {/* Encabezado de categoría */}
        <div className="flex justify-between items-center mb-12" data-aos="fade-down">
          <div className="flex items-center gap-4">
            <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(0,180,216,0.5)]">
              {categories[activeCategory].icon}
            </span>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {categories[activeCategory].name}
            </h2>
          </div>

          {/* Botones de navegación */}
          <div className="flex gap-4">
            <button
              onClick={prevCategory}
              className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(0,180,216,0.3)]"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-400" />
            </button>
            <button
              onClick={nextCategory}
              className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(0,180,216,0.3)]"
            >
              <ChevronRight className="w-6 h-6 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Grid de tarjetas de precios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories[activeCategory].plans.map((plan, idx) => (
            <div
              key={`${activeCategory}-${plan.name}`}
              data-aos={idx === 0 ? "fade-right" : idx === 1 ? "fade-up" : "fade-left"}
              data-aos-delay={idx * 100}
              className="relative group"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/20 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

              {/* Tarjeta principal */}
              <div className="relative bg-gradient-to-br from-neutral-800 via-neutral-900 to-black border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(0,180,216,0.2)]">
                {/* Barra superior con gradiente */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" />

                {/* Contenido de la tarjeta */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                    ${plan.price}
                  </div>
                </div>

                {/* Lista de características */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li
                      key={`${plan.name}-${featureIdx}`}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón de acción */}
                <button
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Seleccionar Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de navegación */}
        <div className="flex justify-center mt-16 gap-3">
          {categories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                idx === activeCategory
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 scale-125 ring-2 ring-cyan-500/50'
                  : 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 hover:from-blue-500/50 hover:to-cyan-500/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCarousel;