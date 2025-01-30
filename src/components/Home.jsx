import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import HomeComponent from './HomeComponent';
import SSHAccountCreation from './CrearSSH/SSHAccountCreation';
import CloudVPSSelection from './CloudVps/CloudVPSSelection';
import DigitalTVDashboard from './TvDigital/DigitalTVDashboard';
import PriceCardSsh from './PriceCardSsh'; 
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const AppRoutes = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/ssh-account-creation" element={
          <div className="min-h-screen">
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <SSHAccountCreation />
            <Footer />
          </div>
        } />
        <Route path="/vps-calculator" element={<CloudVPSSelection />} />
        <Route path="/digital-tv-dashboard" element={
          <div className="min-h-screen">
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <DigitalTVDashboard />
            <Footer />
          </div>
        } />
        <Route path="/tv-digital" element={<DigitalTVDashboard />} />
        <Route path="/servicios" element={<ServicesSection />} />
        <Route path="/precios" element={<PriceCardSsh />} />
        <Route path="/contacto" element={<ContactSection />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </div>
  );
};

export default AppRoutes;