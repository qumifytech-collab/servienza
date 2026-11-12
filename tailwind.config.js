/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Same palette as the web app (globals.css in pool-amigo-web) so the site and the product match.
        ground: '#F7F7F4',
        ink: '#16160F',
        muted: '#4B4A43',
        faint: '#6B6A62',
        line: '#E6E4DC',
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        amber: { 50: '#FEF3C7', 300: '#FCD34D', 700: '#92400E' },
      },
      fontFamily: {
        sans: ['"Manrope Variable"', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['"Manrope Variable"', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        float: '0 30px 60px -20px rgba(22,22,15,0.25), 0 0 0 1px #E6E4DC',
        phone: '0 30px 60px -20px rgba(22,22,15,0.45)',
      },
    },
  },
  plugins: [],
}
