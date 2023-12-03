/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        menuexpress_purple: '#A71198',
        menuexpress_purpledark: '#841179',
        menuexpress_title: '#6B6B6B',
        menuexpress_greenbuton : '#2ED47A',
        menuexpress_redbuton : '#ED1B30',
        menuexpress_gray: '#A3A3A3',
        menuexpress_soft_gray: '#E9E9E9',
        menuexpress_modals : '#fff',
        menuexpress_bgmodal: '#E5E5E5'
      },
    },
  },
  plugins: [],
};



