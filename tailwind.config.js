/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        accent: 'hsl(var(--accent))',
        // Add other colors as needed
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
      }
    },
  },
  plugins: [],
}
