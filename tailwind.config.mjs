/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000022', 
        secondary: '#000044', 
        darkNavy: '#000033',
        lightBlue: '#667eea',
        darkPurple: '#4B0082',
        lightPurple: '#B06AB3',
        primarygradient: 'bg-gradient-to-r from-indigo-700 to-purple-900',
        gradient: 'bg-gradient-to-r from-purple-800 to-indigo-800',
      },
      boxShadow: {
        boxShadow: {
          'custom': '0px 4px 10px rgba(0, 0, 0, 0.3), 0px 2px 15px rgba(0, 0, 0, 0.2), inset 0px -10px 15px rgba(255, 0, 255, 0.3)', // Gradient-like effect
        },
        // custom: '0px 4px 10px rgba(128, 0, 128, 0.4)', 
        // blueShadow: 'shadow-[10px_10px_30px_rgba(0,0,0,0.5)]',
       
     
      },
    },
  },
  plugins: [],
};
