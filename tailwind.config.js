/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      '2lg': '1090px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#1A1E26",
        secondary: "#BED4FF",
        secondaryLight: "#E0EAFD",
        'primaryText': 'var(--primary-text)',
        'secondaryText': 'var(--secondary-text)',

      },
      fontFamily: {
        archivo: ["Archivo Expanded", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
