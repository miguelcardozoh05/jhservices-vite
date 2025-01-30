// ServicesSection.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ResponsiveServiceCards from './ServiceCard';
import { Server, Lock, Cloud, Tv } from 'lucide-react';

const services = [
  {
    Icon: Server,
    title: 'SSH Gratuito',
    description: 'Acceso SSH gratuito con características premium',
    features: ['2 conexiones simultáneas', 'Velocidad 1Gb/s', 'Sin restricciones de puertos'],
    link: '/ssh-account-creation',
  },
  {
    Icon: Lock,
    title: 'Servidores VPN Premium',
    description: 'VPN de alta velocidad con seguridad avanzada',
    features: ['Encriptación de nivel militar', 'Sin logs de navegación', 'Soporte P2P'],
    link: '/vpn',
    inDevelopment: true,
  },
  {
    Icon: Cloud,
    title: 'Cloud VPS',
    description: 'Servidores virtuales de alto rendimiento',
    features: ['Hardware de última generación', 'Panel de control intuitivo', 'Backups automáticos'],
    link: '/cloud-vps-selection', // Actualizado el enlace
  },
  {
    Icon: Tv,
    title: 'TV Digital',
    description: 'Acceso a canales premium en HD',
    features: ['+1000 canales en vivo', 'Contenido VOD', 'Compatibilidad multiplataforma'],
    link: '/digital-tv-dashboard',
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  return (
    <div className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-b from-gray-100 to-gray-600 text-transparent bg-clip-text drop-shadow-lg">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 text-lg">
            Soluciones tecnológicas de vanguardia diseñadas para satisfacer tus necesidades más exigentes
          </p>
        </div>
        <ResponsiveServiceCards cards={services} />
      </div>
    </div>
  );
};

export default ServicesSection;