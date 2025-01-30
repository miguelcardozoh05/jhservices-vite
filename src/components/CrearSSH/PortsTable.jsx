import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Wifi, Globe, Server } from 'lucide-react';
import PropTypes from 'prop-types';

const PortsTable = ({ animationVariants }) => {
  const ports = [
    { service: "BADVPN", port: "7300", status: "Activo" },
    { service: "DROPBEAR", port: "90", status: "Activo" },
    { service: "PYTHON2", port: "80", status: "Activo" },
    { service: "SQUID", port: "3128", status: "Activo" },
    { service: "SSH", port: "22", status: "Activo" },
    { service: "SSL", port: "442", status: "Activo" },
    { service: "UDPCUSTOM", port: "1-65535", status: "Activo" }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <motion.div className="max-w-4xl mx-auto mb-16 px-4 md:px-8 overflow-hidden" {...animationVariants.fadeIn}>
      <div className="bg-black border border-gray-700 rounded-xl shadow-lg" data-aos="fade-up">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Wifi className="h-6 w-6 text-cyan-500" />
            <h2 className="text-2xl font-semibold text-gray-300">Puertos Activos</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-600">
              <thead className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Servicio</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Puerto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Estado</th>
                </tr>
              </thead>
              <tbody className="bg-black divide-y divide-gray-600">
                {ports.map((port, index) => {
                  const statusColor = port.status === "Activo" ? 'text-green-500' : 'text-red-500';
                  return (
                    <motion.tr
                      key={index}
                      className="hover:bg-gray-800 transition-colors"
                      whileHover={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
                      whileTap={{ scale: 0.98 }}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">{port.service}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{port.port}</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${statusColor}`}>{port.status}</td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <motion.div 
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg border border-gray-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-aos="fade-up"
            >
              <div className="flex items-center gap-3 mb-3">
                <Globe className="h-5 w-5 text-cyan-500" />
                <h3 className="text-lg font-medium text-gray-300">Dominio</h3>
              </div>
              <p className="text-gray-400 text-center font-mono">web.jhsfree.xyz</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg border border-gray-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-aos="fade-up"
            >
              <div className="flex items-center gap-3 mb-3">
                <Server className="h-5 w-5 text-cyan-500" />
                <h3 className="text-lg font-medium text-gray-300">IP</h3>
              </div>
              <p className="text-gray-400 text-center font-mono">84.247.172.101</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

PortsTable.propTypes = {
  animationVariants: PropTypes.object.isRequired,
};

export default PortsTable;