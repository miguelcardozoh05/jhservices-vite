import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './NavBar';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import SSHAccountCreation from './CrearSSH/SSHAccountCreation';
import CloudVPSSelection from './CloudVps/CloudVPSSelection';
import DigitalTVDashboard from './TvDigital/DigitalTVDashboard';
import PriceCardSsh from './CrearSSH/PriceCardSsh';
import Caracteristicas from './Caracteristicas';
import Logos from './Logos';
import UserCount from './UserCount'; // Importar UserCount

const HomeComponent = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('servicios');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <HeroSection handleScrollToServices={handleScrollToServices} />
        <Caracteristicas />
        <UserCount /> {/* Agregar UserCount */}
        <section id="servicios" className="py-20">
          <ServicesSection />
        </section>
        <section id="precios" className="py-20"> {/* Añade el ID aquí */}
          <PriceCardSsh />
        </section>
        <Logos />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

const ContactSection = () => {
  return (
    <div>
      {/* Contenido de la sección de contacto */}
    </div>
  );
};

const AppRoutes = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/ssh-account-creation" element={
          <div className="min-h-screen">
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <SSHAccountCreation />
            <Footer />
          </div>
        } />
        <Route path="/cloud-vps-selection" element={<CloudVPSSelection />} />
        <Route path="/digital-tv-dashboard" element={
          <div className="min-h-screen">
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <DigitalTVDashboard />
            <Footer />
          </div>
        } />
        <Route path="/tv-digital" element={<DigitalTVDashboard />} />
        <Route path="/servicios" element={<ServicesSection />} />
        <Route path="/price-card-ssh" element={<PriceCardSsh />} />
        <Route path="/contacto" element={<ContactSection />} />
        <Route path="/logos" element={<Logos />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;