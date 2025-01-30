import { useRef, useEffect, useState } from 'react';
import HeroTv from './HeroTv';
import Logos from '../Logos';

const InfiniteChannelCarousel = () => {
  const [channels] = useState([
    { 
      id: 1, 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LN%2B.png', 
    },
    { 
      id: 2, 
      logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDxpWkhhv-fN65DGZJILILv9rpK2CsH9NjUG7LIhh_b0VAXqaY7rpQS_90fNJFj4Xci5Y4j-dbM3-nUFPaX9Lrb2_BiUBYfX5TlaBKKtKAZu4Hv6UwFpEZfbg17AO-MwZyXQHiSusQBcgWOpe-LHdYkGEUyXFQXDTgN7UfuF-s2rUlKcYBPtZcACFF/s126/c5n.png', 
    },
    { 
      id: 3, 
      logo: 'https://i.ibb.co/cD3CyWC/foxsports.png', 
    },
    { 
      id: 4, 
      logo: 'https://i.ibb.co/KDVFxxW/TNT-SPORT-removebg-preview-1.png', 
    },
    { 
      id: 5, 
      logo: 'https://static.flow.com.ar/images/280/CH_LOGO/350/500/0/0/71306601073189.png', 
    },
    { 
      id: 6, 
      logo: 'https://static.flow.com.ar/images/74/CH_LOGO/350/500/0/0/78711436072355.png', 
    },
    { 
      id: 7, 
      logo: 'https://static.flow.com.ar/images/267/CH_LOGO/350/500/0/0/75126015073445.png', 
    },
    { 
      id: 8, 
      logo: 'https://static.flow.com.ar/images/6877/CH_LOGO/350/500/0/0/67214550074230.png', 
    },
    { 
      id: 9, 
      logo: 'https://github.com/masterentertainment/listas/blob/main/logos/STARC.png?raw=true', 
    },
    { 
      id: 10, 
      logo: 'https://github.com/masterentertainment/listas/blob/main/logos/HBOLA.png?raw=true', 
    },
    { 
      id: 11, 
      logo: 'https://vignette.wikia.nocookie.net/logosfake/images/8/8e/UCHD_2011.png/revision/latest?cb=20140429100918', 
    },
    { 
      id: 12, 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Disney_Channel_Germany_Logo_2014.png', 
    },
    { 
      id: 13, 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Nick_%28Logo%29.png', 
    },
    { 
      id: 14, 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/1594px-Cartoon_Network_2010_logo.svg.png', 
    },
    { 
      id: 15, 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/2016_Discovery_Kids_logo.svg/1200px-2016_Discovery_Kids_logo.svg.png', 
    },
    { 
      id: 16, 
      logo: 'https://i.ibb.co/BcgqJX0/tntnovelas.png', 
    },
    { 
      id: 17, 
      logo: 'https://static.flow.com.ar/images/706/CH_LOGO/350/500/0/0/90493668072263.png', 
    },
    { 
      id: 18, 
      logo: 'https://static.flow.com.ar/images/670/CH_LOGO/350/500/0/0/74835190079.png', 
    },
    { 
      id: 19, 
      logo: 'https://static.flow.com.ar/images/271/CH_LOGO/350/500/0/0/48950714073066.png', 
    },
    { 
      id: 20, 
      logo: 'https://static.flow.com.ar/images/300/CH_LOGO/350/500/0/0/88913423072710.png', 
    }
  ]);

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    const speed = 0.5;

    const animateScroll = () => {
      scrollPosition += speed;
      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
      }
      carousel.scrollLeft = scrollPosition;
      requestAnimationFrame(animateScroll);
    };

    const animationFrameId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [channels]);

  const handleContractPlan = (planName) => {
    const message = `¡Hola! 👋 Me interesa contratar el plan de TV que incluye el canal ${planName}. ¿Podrían brindarme más información sobre precios y paquetes disponibles?`;
    const whatsappLink = `https://wa.me/5493812531123?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        color: '#E0E0E0'
      }}
    >
      <HeroTv />
      <div className="flex-grow">
        <h2 className="text-3xl font-bold text-white text-center py-8
          bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          Nuestros Canales
        </h2>

        <div
          ref={carouselRef}
          className="flex overflow-x-hidden py-8 scroll-smooth"
        >
          {[...channels, ...channels].map((channel, index) => (
            <div 
              key={index} 
              className="w-64 mx-4 flex-shrink-0 text-center 
                bg-gray-800/50 rounded-xl p-6 transform transition-all 
                hover:scale-105 hover:shadow-xl"
            >
              <img 
                src={channel.logo} 
                alt={channel.name}
                className="w-32 h-32 object-contain mx-auto my-4 
                  rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {channel.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {channel.description}
              </p>
              <button
                onClick={() => handleContractPlan(channel.name)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
              >
                Contratar Plan
              </button>
            </div>
          ))}
        </div>
      </div>
      <Logos />
    </div>
  );
};

export default InfiniteChannelCarousel;