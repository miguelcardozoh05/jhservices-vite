export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ajusta la ruta según tu estructura de proyecto
  ],
  theme: {
    extend: {
      colors: {
        'gray-900': '#1a1a1a',
        'gray-800': '#2d2d2d',
        'gray-700': '#3f3f3f',
        'gray-600': '#525252',
        'gray-500': '#666666',
        'gray-400': '#7a7a7a',
        'gray-300': '#8d8d8d',
        'gray-200': '#a1a1a1',
        'gray-100': '#b4b4b4',
        primary: '#1E3A8A', // Azul marino
        secondary: '#3B82F6', // Azul claro
        accent: '#D97706', // Dorado
        background: '#111827', // Negro grisáceo
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #1E2329, #2C3E50, #34495E)',
        'hero-gradient': `radial-gradient(circle at 20% 50%, rgba(100, 148, 237, 0.267), transparent 40%), 
                          radial-gradient(circle at 80% 50%, rgba(137, 43, 226, 0.356), transparent 40%), 
                          radial-gradient(circle at 50% 20%, rgba(102, 184, 175, 0.089), transparent 50%), 
                          linear-gradient(to bottom, #1a1a1a, #0d0d0d 80%, #000000)`,
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        glow: 'glow 2s infinite', // Animación personalizada
        backgroundMovement: 'backgroundMovement 20s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        backgroundMovement: {
          '0%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0 0' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

