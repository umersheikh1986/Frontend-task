/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "swiper-bullet-size": "0.79rem", // 12px
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "swiper-bullet": "#6B7280", // gray-500 for bullets
        "swiper-active-bullet": "#000000", // black for active bullet
      },
      scale: {
        "swiper-active": "1.1", // slightly larger scale for active bullet
      },
    },
  },
  plugins: [],
};
