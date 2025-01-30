import AppRoutes from './components/Routes';
import ContactChatButton from './components/ContactChatButton';
// Elimina la importación de Logo
// import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ContactChatButton />
      {/* Elimina el uso del componente Logo */}
      {/* <Logo /> */}
    </div>
  );
}

export default App;