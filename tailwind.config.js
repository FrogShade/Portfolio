/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://live.staticflickr.com/5604/15634392837_777f361c16_h.jpg')",
        'footer-texture': "url('https://live.staticflickr.com/5604/15634392837_777f361c16_h.jpg')",
      },
      scale: {
        '75': '0.75',
        '100': '1',
      }
    },
  },
  plugins: [],
}

