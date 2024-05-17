/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppinsMedium: ["Poppins-Medium", "sans-serif"],
        poppinsBold: ["Poppins-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
