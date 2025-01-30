import { useState, useEffect, useCallback } from 'react';
import { MessageCircle, X, ArrowUp, MessageSquare, Send } from 'lucide-react';
import PopupMessage from './ContactChatButton/PopupMessage';
import ContactOptions from './ContactChatButton/ContactOptions';

// Exportar la función para abrir el botón de chat
export const openContactChatButton = () => {
  const event = new CustomEvent('openContactChatButton');
  window.dispatchEvent(event);
};

const ContactChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);

  // Configuración de contactos con mensajes de ayuda
  const contacts = [
    {
      name: 'WhatsApp',
      icon: <MessageSquare className="w-5 h-5 text-[#25D366]" />,
      link: 'https://wa.me/5493812531123',
      helpText: '¡Chatea con nosotros! Respuesta rápida garantizada.',
    },
    {
      name: 'Telegram Ventas',
      icon: <Send className="w-5 h-5 text-[#0088cc]" />,
      link: 'https://t.me/SoporteJHS_bot',
      helpText: 'Contáctanos por Telegram para soporte especializado.',
    },
  ];

  // Scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Mostrar mensajes emergentes
  const showRandomMessage = useCallback(() => {
    const helpMessages = [
      '¡Hola! Estamos en línea para ayudarte 😊',
      '¿Necesitas asesoramiento? Estamos aquí 👋',
      'Servicio al cliente las 24 horas ⏰',
      'Tenemos las mejores soluciones para ti 🚀',
      'Resolvemos tus dudas al instante 💡',
      '¿En qué podemos ayudarte hoy? 🤝',
    ];
    const randomMessage = helpMessages[Math.floor(Math.random() * helpMessages.length)];
    setPopupMessage(randomMessage);

    const timer = setTimeout(() => {
      setPopupMessage(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Mostrar mensajes emergentes periódicos
  useEffect(() => {
    const initialTimer = setTimeout(showRandomMessage, 10000);
    const intervalTimer = setInterval(() => {
      if (Math.random() < 0.7) {
        showRandomMessage();
      }
    }, 30000 + Math.random() * 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [showRandomMessage]);

  // Mostrar el botón de scroll después de cierta distancia
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const handleOpenContactChatButton = () => {
      setIsOpen(true);
    };

    window.addEventListener('openContactChatButton', handleOpenContactChatButton);

    return () => {
      window.removeEventListener('openContactChatButton', handleOpenContactChatButton);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.contact-chat-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4 contact-chat-button">
      {/* Mensaje emergente */}
      <PopupMessage popupMessage={popupMessage} />

      <div className="flex items-center space-x-4">
        {/* Botón para volver al inicio */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            title="Volver al inicio"
            className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white p-2 rounded-full shadow-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <div className="relative">
          {/* Botón principal de chat */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            title={isOpen ? 'Cerrar' : '¿Necesitas ayuda?'}
            className="relative bg-gradient-to-br from-cyan-500 to-blue-500 text-white p-2 rounded-full shadow-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
          >
            {isOpen ? <X className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
            <span className="absolute top-0 right-0 block h-2 w-2 bg-yellow-500 rounded-full animate-pulse"></span>
          </button>

          {/* Opciones de contacto */}
          {isOpen && (
            <ContactOptions
              contacts={contacts}
              setIsOpen={setIsOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactChatButton;
