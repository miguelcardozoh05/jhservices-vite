import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full py-10 bg-black"> {/* Cambia el fondo a negro */}
            <div className="container mx-auto text-center px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Sección de información de la compañía */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-extrabold text-white mb-4">JHServices</h4>
                        <p className="text-gray-300 leading-relaxed">
                            Elevando los estándares en soluciones digitales y servicios de conectividad premium para empresas y profesionales.
                        </p>
                    </div>
                    
                    {/* Sección de servicios */}
                    <div>
                        <h4 className="text-xl font-extrabold text-white mb-6">Nuestros Servicios</h4>
                        <ul className="space-y-3 text-gray-300 text-center">
                            <li><a href="#servicios" className="hover:text-teal-400 transition-colors">SSH Premium</a></li>
                            <li><a href="/ssh-account-creation" className="hover:text-teal-400 transition-colors">VPN</a></li>
                            <li><a href="/cloud-vps-selection" className="hover:text-teal-400 transition-colors">Cloud VPS</a></li> {/* Actualizado el enlace */}
                            <li><a href="/digital-tv-dashboard" className="hover:text-teal-400 transition-colors">TV Digital</a></li>
                        </ul>
                    </div>
                    
                    {/* Sección de grupos */}
                    <div>
                        <h4 className="text-xl font-extrabold text-white mb-6">Únete a nuestros grupos</h4>
                        <ul className="space-y-3 text-gray-300 text-center">
                            <li>
                                <a href="https://chat.whatsapp.com/FZ1FjVXi3Zz4BnNHwJkXlk" className="flex items-center justify-center hover:text-teal-400 transition-colors">
                                    <FaWhatsapp className="mr-2" /> Grupo Whatsapp
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/+rAuU1_uHGZthMWZh" className="flex items-center justify-center hover:text-teal-400 transition-colors">
                                    <FaTelegram className="mr-2" /> Grupo Telegram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Línea de división y derechos reservados */}
                <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
                    <p className="text-gray-400">© 2024 JHServices. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
