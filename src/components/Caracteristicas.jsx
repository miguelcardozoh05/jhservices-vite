import { useEffect } from 'react';
import '../index.css'; // Asegúrate de crear y ajustar los estilos en este archivo

const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
};

const Caracteristicas = () => {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const finalValue = parseInt(counter.getAttribute('data-value'));
          animateValue(counter, 0, finalValue, 2000);
          observer.unobserve(counter);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5
    });

    document.querySelectorAll('.stat-counter').forEach(counter => {
      observer.observe(counter);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-glass rounded-lg">
            <div className="text-4xl font-bold text-cyan-400 mb-2 stat-counter metallic-text" data-value="5000">0</div>
            <p className="text-gray-400 metallic-text">Usuarios Activos</p>
          </div>
          <div className="p-6 bg-glass rounded-lg">
            <div className="text-4xl font-bold text-cyan-400 mb-2 stat-counter metallic-text" data-value="50">0</div>
            <p className="text-gray-400 metallic-text">Servidores</p>
          </div>
          <div className="p-6 bg-glass rounded-lg">
            <div className="text-4xl font-bold text-cyan-400 mb-2 stat-counter metallic-text" data-value="20">0</div>
            <p className="text-gray-400 metallic-text">Países</p>
          </div>
          <div className="p-6 bg-glass rounded-lg">
            <div className="text-4xl font-bold text-cyan-400 mb-2 stat-counter metallic-text" data-value="99">0</div>
            <p className="text-gray-400 metallic-text">Uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Caracteristicas;