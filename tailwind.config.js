/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        platina: 'var(--bg)',
        altBlue: 'var(--text-alt)',
        altGray: 'var(--text-primary)',
        blood: 'var(--invalid)',
        whiteforform: 'var(--whiteforform)',
      },
      fontFamily: {
        body: ['Neutron Dance'],
      },
    },
  },
  plugins: [],
};
