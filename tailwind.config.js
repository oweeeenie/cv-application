/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-text': '#bccce0',
        'custom-input': '#a1869e',
        'custom-hover': '#c0e8f9',
      },
    },
  },
  plugins: [],
};
