import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Users } from 'lucide-react';

const socket = io('https://web.jhsfree.xyz');

const UserCount = () => {
  const [userCount, setUserCount] = useState(0);
  const [glowEffect, setGlowEffect] = useState(false);

  useEffect(() => {
    socket.on('userCount', (count) => {
      setUserCount(count);
      setGlowEffect(true);
      setTimeout(() => setGlowEffect(false), 1000);
    });

    return () => {
      socket.off('userCount');
    };
  }, []);

  return (
    <div className="flex items-center justify-center py-8"> {/* Reducir el padding superior e inferior */}
      <div className={`
        relative 
        bg-gradient-to-r from-gray-900 to-black
        p-8 rounded-xl
        border border-gray-800
        shadow-2xl
        transition-all duration-300
        ${glowEffect ? 'scale-105' : 'scale-100'}
      `}>
        {/* Efecto de luz superior */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-blue-500 blur-sm" />
        
        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-center space-y-4">
          <div className="bg-gradient-to-r from-gray-500 to-gray-700 p-3 rounded-full">
            <Users className="w-8 h-8 text-blue-400" />
          </div>
          
          <h2 className={`
            text-2xl font-bold
            bg-clip-text text-transparent
            bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100
            ${glowEffect ? 'animate-pulse' : ''}
          `}>
            Visitantes Activos
          </h2>
          
          <div className={`
            text-5xl font-bold
            bg-clip-text text-transparent
            bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400
            ${glowEffect ? 'animate-pulse' : ''}
          `}>
            {userCount}
          </div>
        </div>

        {/* Líneas decorativas */}
        <div className="absolute bottom-2 left-4 w-12 h-0.5 bg-blue-500/30" />
        <div className="absolute bottom-4 left-4 w-8 h-0.5 bg-blue-500/20" />
        <div className="absolute bottom-2 right-4 w-12 h-0.5 bg-blue-500/30" />
        <div className="absolute bottom-4 right-4 w-8 h-0.5 bg-blue-500/20" />
      </div>
    </div>
  );
};

export default UserCount;