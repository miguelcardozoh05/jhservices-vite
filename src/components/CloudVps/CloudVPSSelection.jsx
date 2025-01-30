import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HeroVPS from "./HeroVPS";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Logos from "../Logos"; // Importa el componente Logos
import { data } from "./data";

const CloudVPSSelection = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isHovered, setIsHovered] = useState('');
  const nodeRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleCountryClick = (country) => {
    setActiveTab(activeTab === country ? null : country);
  };

  return (
    <>
      <NavBar />
      <HeroVPS /> {/* Añade el componente HeroVPS */}

      <div className="text-center mb-24 py-24 px-4 lg:px-0">
        <motion.h1
          className="text-5xl font-bold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 text-transparent bg-clip-text mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Servidores VPS en Diferentes Países
        </motion.h1>
        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#00ADB5] to-[#00FFAB]" />
      </div>

      {/* Botones 3D */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 px-4 lg:max-w-4xl lg:mx-auto">
        {Object.keys(data).map((country) => (
          <button
            key={country}
            className={`
              relative overflow-hidden rounded-xl p-6
              bg-gradient-to-br from-gray-900 to-black
              border border-gray-800
              transform transition-all duration-300
              ${isHovered === country ? 'scale-105' : 'scale-100'}
              group
            `}
            onMouseEnter={() => setIsHovered(country)}
            onMouseLeave={() => setIsHovered('')}
            onClick={() => handleCountryClick(country)}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5]/20 to-[#00FFAB]/20" />
              <div className="absolute -inset-x-1/2 -inset-y-1/2 w-[200%] h-[200%] animate-spin-slow bg-gradient-conic from-transparent via-[#00ADB5]/10 to-transparent opacity-30" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-2">
                {country}
              </h2>
              <div className="h-0.5 w-16 bg-[#00ADB5] transition-all duration-300 group-hover:w-full" />
            </div>
          </button>
        ))}
      </div>

      {/* Plans Display with TransitionGroup */}
      <TransitionGroup component={null}>
        {activeTab && (
          <CSSTransition
            key={activeTab}
            timeout={300}
            classNames="fade"
            nodeRef={nodeRef}
          >
            <div ref={nodeRef} className="py-12 px-4 mb-16 lg:max-w-6xl lg:mx-auto">
              <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
                {data[activeTab].map((plan) => (
                  <div
                    key={plan.id}
                    className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5]/5 to-[#00FFAB]/5" />
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-100 mb-4">{plan.title}</h3>
                      <div className="text-3xl font-bold text-[#00ADB5] mb-6">
                        ${plan.priceMensual}
                        <span className="text-sm text-gray-400 ml-2">/ mes</span>
                      </div>
                      
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <span className="text-[#00FFAB] mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <button className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-[#00ADB5] to-[#00FFAB] text-black font-bold hover:from-[#00FFAB] hover:to-[#00ADB5] transition-all duration-300">
                        Seleccionar Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Carousel */}
              <div className="md:hidden relative px-6">
                <div className="flex flex-col items-center space-y-8">
                  {data[activeTab].map((plan) => (
                    <motion.div
                      key={plan.id}
                      className="w-full p-6 rounded-xl bg-gradient-to-br from-gray-900 via-black to-gray-900 relative"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5]/5 to-[#00FFAB]/5 rounded-xl" />
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-gray-100 mb-4">
                          {plan.title}
                        </h3>
                        <div className="text-3xl font-bold text-[#00ADB5] mb-6">
                          ${plan.priceMensual}
                        </div>
                        <ul className="space-y-3">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <span className="text-[#00FFAB] mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-[#00ADB5] to-[#00FFAB] text-black font-bold hover:from-[#00FFAB] hover:to-[#00ADB5] transition-all duration-300">
                          Seleccionar Plan
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>

      <Logos /> {/* Añade el componente Logos */}
      <Footer />
    </>
  );
};

export default CloudVPSSelection;