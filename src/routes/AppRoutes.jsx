import { Switch, Route } from 'react-router-dom';
import ContactChatButton from '../components/ContactChatButton';
import ServicesSection from '../components/ServicesSection';
import DigitalTVDashboard from '../components/TvDigital/DigitalTVDashboard';
import SSHAccountCreation from '../components/CrearSSH/SSHAccountCreation';
import VPSConfigurator from '../components/VPSConfigurator';
import NavBar from '../components/NavBar';
// ...existing code...

const AppRoutes = () => {

  const handleButtonClick = () => {
    console.log('Botón de acción clicado');
  };

  return (
    <div>
      <NavBar onButtonClick={handleButtonClick} />
      <Switch>
        {/* ...existing routes... */}
        <Route path="/digital-tv-dashboard">
          <DigitalTVDashboard />
        </Route>
        <Route path="/ssh-account-creation">
          <SSHAccountCreation />
        </Route>
        <Route path="/vps-calculator">
          <VPSConfigurator />
        </Route>
        <Route path="/" exact>
          <ServicesSection />
        </Route>
      </Switch>
      <ContactChatButton />
    </div>
  );
};

export default AppRoutes;
