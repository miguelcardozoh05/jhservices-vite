import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tv, Check, ChevronLeft, ChevronRight, Package, Globe } from 'lucide-react';

const tvPlans = [
  {
    name: "Plan Básico",
    price: 3000,
    channels: 50,
    features: [
      "300+ Canales en HD",
      "Acceso a Canales Locales",
      "Reproducción en 1 Dispositivos"
    ],
    background: "from-gray-700 to-gray-900",
    icon: <Tv className="w-12 h-12 text-cyan-400" />
  },
  {
    name: "Plan Familiar",
    price: 5000,
    channels: 100,
    features: [
      "300+ Canales en HD",
      "Acceso a Canales Locales",
      "Reproducción en 2 Dispositivos"
    ],
    background: "from-purple-700 to-indigo-900",
    icon: <Package className="w-12 h-12 text-teal-400" />
  },
  {
    name: "Plan Premium",
    price: 7000,
    channels: 200,
    features: [
      "300+ Canales en Full HD",
      "Acceso a Canales Locales",
      "Canales Internacionales",
      "Reproducción en 3 Dispositivos",
      "Soporte 24/7"
    ],
    background: "from-teal-700 to-cyan-900",
    icon: <Globe className="w-12 h-12 text-purple-400" />
  }
];

const DigitalTVHero = () => {
  const [currentPlan, setCurrentPlan] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  const nextPlan = () => {
    setCurrentPlan((prev) => (prev + 1) % tvPlans.length);
  };

  const prevPlan = () => {
    setCurrentPlan((prev) => (prev - 1 + tvPlans.length) % tvPlans.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        nextPlan();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering]);

  const handleContractPlan = (planName, price) => {
    const message = `¡Hola! 👋 Me interesa contratar el ${planName} de TV Digital por $${price}/mes. ¿Podrían brindarme más información?`;
    const whatsappUrl = `https://wa.me/5493812531123?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              TV Digital
            </span> Planes
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Encuentra el plan perfecto para ti. Máxima calidad, contenido increíble.
          </p>
        </div>

        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button 
            onClick={prevPlan} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 
            bg-purple-600/30 hover:bg-purple-600/50 p-2 rounded-full transition-all"
          >
            <ChevronLeft className="w-8 h-8 text-cyan-400" />
          </button>
          <button 
            onClick={nextPlan} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 
            bg-purple-600/30 hover:bg-purple-600/50 p-2 rounded-full transition-all"
          >
            <ChevronRight className="w-8 h-8 text-cyan-400" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPlan}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`relative bg-gradient-to-r ${tvPlans[currentPlan].background} 
              rounded-2xl shadow-2xl overflow-hidden p-8 md:p-12 text-white w-full`}
              style={{ height: '500px' }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between h-full space-y-6 md:space-y-0 md:space-x-12">
                <div className="flex-shrink-0">
                  {tvPlans[currentPlan].icon}
                </div>

                <div className="text-center md:text-left flex-grow">
                  <h2 className="text-3xl font-bold mb-4">
                    {tvPlans[currentPlan].name}
                  </h2>
                  <p className="text-5xl font-extrabold mb-6 
                    bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                    ${tvPlans[currentPlan].price.toFixed(2)}/mes
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {tvPlans[currentPlan].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-5 h-5 text-teal-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleContractPlan(tvPlans[currentPlan].name, tvPlans[currentPlan].price)}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-700 
                    rounded-lg hover:from-purple-700 hover:to-indigo-800 
                    transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Contratar Plan
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center space-x-3 mt-6">
            {tvPlans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPlan(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${currentPlan === index ? 'bg-cyan-400 w-6' : 'bg-gray-500'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTVHero;