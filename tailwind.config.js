/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        pastel: {
          bg: '#fdfbf7', // Warm off-white
          primary: '#8b5cf6', // Soft Violet
          secondary: '#f472b6', // Soft Rose
          accent: '#34d399', // Soft Mint
          surface: 'rgba(255, 255, 255, 0.8)', // Glass effect
          text: '#1f2937', // Dark Gray
          muted: '#9ca3af', // Muted Gray
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0, -20px)' },
        },
      },
    },
  },
  plugins: [],
}
