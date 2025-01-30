import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Shield, Users, Lock, Server, Wifi, Copy } from 'lucide-react';
import HeroSSH from './HeroSSH'; // Ajustar la ruta de importación
import PriceCardSsh from './PriceCardSsh';
import FeaturesGrid from './FeaturesGrid';
import PortsTable from './PortsTable';
import UserCount from './UserCount';
import Logos from '../Logos';

const animationVariants = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 15 
    }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { 
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const SSHAccountCreation = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState(null);
  const [accountData, setAccountData] = useState(null);
  const [stats, setStats] = useState({ totalUsuarios: 0, cuposDisponibles: 100, limite: 100 });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const fetchStats = async () => {
      try {
        const response = await fetch('https://web.jhsfree.xyz/api/stats');
        if (!response.ok) throw new Error('Error al obtener las estadísticas');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
        setMessage({ text: 'Error al obtener las estadísticas', isError: true });
      }
    };

    fetchStats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('https://web.jhsfree.xyz/create-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Error al crear la cuenta');

      setAccountData(data);
      setMessage({ text: 'Cuenta SSH creada exitosamente', isError: false });
      setUsername('');

      const updatedStats = await fetch('https://web.jhsfree.xyz/api/stats');
      const updatedStatsData = await updatedStats.json();
      setStats(updatedStatsData);
    } catch (error) {
      setMessage({ text: error.message, isError: true });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage({ text: 'Copiado al portapapeles', isError: false });
      setTimeout(() => setMessage(null), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
      setMessage({ text: 'Error al copiar al portapapeles', isError: true });
    }
  };

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('servicios');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSSH handleScrollToServices={handleScrollToServices} />
      <motion.div
        className="container mx-auto px-4 py-8 md:py-16 space-y-8 md:space-y-16"
        {...animationVariants.fadeIn}
      >
        <motion.div 
          className="text-center space-y-4 max-w-3xl mx-auto mt-16 md:mt-24"
          {...animationVariants.fadeIn}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-700 drop-shadow-lg">
            Crea tu Cuenta SSH <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00ADB5] to-[#007B7F]">Gratis</span>
          </h1>
          <p className="text-lg md:text-xl text-[#B0BEC5] max-w-xl mx-auto px-4">
            Acceso seguro y rápido con características premium para una experiencia óptima
          </p>
        </motion.div>

        <FeaturesGrid animationVariants={animationVariants} />
        <PortsTable animationVariants={animationVariants} />
        <UserCount stats={stats} animationVariants={animationVariants} />

        <motion.div 
          id="crear-cuenta-ssh" 
          className="max-w-md mx-auto"
          {...animationVariants.fadeUp}
          data-aos="fade-up"
        >
          <div className="bg-black border border-[#2C3240] rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 md:p-8 space-y-6">
              <div className="text-center mb-6">
                <motion.div
                  className="mx-auto w-fit p-3 bg-[#00FFAB]/10 rounded-full mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Shield className="h-10 w-10 md:h-12 md:w-12 text-[#00FFAB]" />
                </motion.div>
                <h2 className="text-xl md:text-2xl font-bold text-[#E5E5E5]">
                  Crear Nueva Cuenta
                </h2>
                <p className="text-sm md:text-base text-[#B0BEC5] mt-2">
                  Genera tu cuenta SSH con un solo clic
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#B0BEC5] mb-2 text-center">
                    Nombre de Usuario
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-[#2C3240] border border-[#3A4150] rounded-lg 
                      focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent 
                      text-[#E5E5E5] placeholder-[#B0BEC5] 
                      transition-all duration-300 text-center"
                    placeholder="Ingresa tu nombre de usuario"
                    pattern="[a-zA-Z0-9_]{3,16}"
                    required
                    disabled={isLoading}
                  />
                  <p className="mt-2 text-xs md:text-sm text-[#B0BEC5] text-center">
                    Solo letras, números y guiones bajos (3-16 caracteres)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 
                    bg-[#00ADB5] text-white 
                    rounded-lg font-semibold 
                    hover:bg-[#00FFAB] 
                    focus:outline-none focus:ring-2 focus:ring-[#00ADB5] 
                    transition-all duration-300 
                    transform hover:scale-[1.02] active:scale-[0.98]
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Creando cuenta...' : 'Crear Cuenta SSH'}
                </button>
              </form>

              {message && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`p-4 rounded-lg text-center text-sm md:text-base
                    ${message.isError 
                      ? 'bg-red-600/10 text-red-400 border border-red-800' 
                      : 'bg-green-600/10 text-green-400 border border-green-800'}`}
                >
                  {message.text}
                </motion.div>
              )}

              {accountData && (
                <motion.div 
                  className="mt-8 p-4 md:p-6 bg-[#2C3240] rounded-xl space-y-4"
                  {...animationVariants.fadeUp}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-[#E5E5E5] text-center mb-4">
                    Detalles de la Cuenta
                  </h3>

                  <div className="space-y-3">
                    {[
                      { icon: Users, label: 'Usuario', value: accountData.username },
                      { icon: Lock, label: 'Contraseña', value: accountData.password },
                      { icon: Server, label: 'Servidor', value: accountData.serverIP },
                      { icon: Wifi, label: 'Conexión', value: accountData.conexion }
                    ].map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="p-3 md:p-4 bg-black border border-gray-700 
                          rounded-lg flex items-center justify-between 
                          shadow-md hover:shadow-xl transition-all duration-300
                          hover:bg-gray-800/50"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center space-x-3 overflow-hidden flex-1">
                          <div className="flex-shrink-0">
                            <item.icon className="h-4 w-4 md:h-5 md:w-5 text-cyan-500" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs md:text-sm text-gray-400">{item.label}</p>
                            <p className="font-mono text-sm md:text-base text-gray-200 truncate">
                              {item.value}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard(item.value)}
                          className="flex-shrink-0 ml-2 p-1.5 md:p-2 hover:bg-gray-700 
                            rounded-full transition-colors group"
                          aria-label={`Copiar ${item.label}`}
                        >
                          <Copy className="h-3.5 w-3.5 md:h-4 md:w-4 text-gray-400 
                            group-hover:text-cyan-500 transition-colors" />
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 text-center text-xs md:text-sm text-gray-400">
                    Expira: {new Date(accountData.trialTime).toLocaleString()}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="max-w-6xl mx-auto mt-16"
          {...animationVariants.fadeIn}
        >
          <PriceCardSsh />
        </motion.div>
      </motion.div>
      <Logos />
    </>
  );
};

export default SSHAccountCreation;