import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { CSSTransition } from 'react-transition-group';
import '../../index.css'; // Asegúrate de crear un archivo CSS para las transiciones

const animationVariants = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }
};

const PriceCardSsh = () => {
  const [showPlans, setShowPlans] = useState(false);

  const plans = [
    {
      name: 'Silver',
      price: '$2000',
      color: 'from-gray-400 to-gray-600',
      features: [
        '2 Conexiones Simultáneas',
        'Velocidad Alta (1 Gbps)',
        'Duración 30 Días',
        'Soporte Estándar',
        'Acceso a Servidores Premium'
      ],
      message: 'Hola, quiero contratar el plan Silver'
    },
    {
      name: 'Gold',
      price: '$3000',
      color: 'from-yellow-400 to-orange-500',
      features: [
        '3 Conexiones Simultáneas',
        'Velocidad Máxima (1 Gbps)',
        'Duración 30 Días',
        'Soporte Prioritario',
        'Servidores Premium Múltiples Países',
        'IP Dedicada'
      ],
      popular: true,
      message: 'Hola, quiero contratar el plan Gold'
    },
    {
      name: 'Platinum',
      price: '$5000',
      color: 'from-purple-500 via-pink-500 to-red-500',
      features: [
        '5 Conexiones Simultáneas',
        'Velocidad Máxima (1 Gbps)',
        'Duración 30 Días',
        'Soporte Premium 24/7',
        'Servidores en Todos los Países',
        'IP Dedicada Múltiple',
        'Acceso VIP'
      ],
      message: 'Hola, quiero contratar el plan Platinum'
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <motion.div
      id="price-card-ssh"
      className="max-w-6xl mx-auto px-4 py-16 space-y-16"
      {...animationVariants.fadeUp}
      data-aos="fade-up"
    >
      <div className="text-center space-y-4 relative">
        <button
          className="relative text-4xl font-bold text-silver-400 shadow-xl py-3 px-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none"
          onClick={() => setShowPlans(!showPlans)}
        >
          <span className="relative z-10">Planes Premium</span>
          <span className="absolute inset-0 bg-gradient-to-r from-gray-500 via-gray-700 to-black opacity-70 rounded-xl transition-opacity duration-300 hover:opacity-100"></span>
        </button>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a tus necesidades de conectividad y rendimiento
        </p>
      </div>

      <CSSTransition
        in={showPlans}
        timeout={500}
        classNames="plans"
        unmountOnExit
      >
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative group" data-aos="fade-up" data-aos-delay={index * 100}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  MÁS POPULAR
                </div>
              )}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r opacity-80 group-hover:opacity-100 transition duration-300 blur-sm"></div>
              <div className="relative p-8 space-y-6 bg-[#2A2A2A] rounded-xl border border-gray-700 shadow-xl hover:border-gray-600 hover:shadow-2xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${plan.color}`}>
                  <h3 className="text-xl font-semibold text-silver-400">{plan.name}</h3> {/* Texto plateado */}
                </div>

                <div className="text-4xl font-bold text-silver-400 shadow-lg">{plan.price}</div> {/* Texto plateado con sombra */}

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-silver-400">Lo que incluye:</h4> {/* Texto plateado */}
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-[#2ecc71]" />
                      <span className="text-silver-400">{feature}</span> {/* Texto plateado */}
                    </div>
                  ))}
                </div>

                <button
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#00b3b3] to-[#ff7f00] text-white rounded-lg font-medium hover:from-[#ff7f00] hover:to-[#00b3b3] transition-all duration-300 transform hover:scale-105"
                  onClick={() =>
                    window.open(
                      `https://wa.me/5493812531123?text=${encodeURIComponent(plan.message)}`,
                      '_blank'
                    )
                  }
                >
                  Seleccionar Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </CSSTransition>
    </motion.div>
  );
};

export default PriceCardSsh;