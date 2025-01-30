import ServicesSection from './ServicesSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Bienvenido a nuestra página de inicio</h1>
        <p className="text-xl text-gray-400">Explora nuestros servicios y descubre cómo podemos ayudarte.</p>
      </header>
      <main>
        <ServicesSection />
      </main>
    </div>
  );
};

export default HomePage;
