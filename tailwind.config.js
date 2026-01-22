module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blush-pink': '#FFE5E5',
        'lavender': '#E6D9EC',
        'peach': '#FFE4D6',
        'cream': '#FFF8F0',
        'soft-pink': '#FFB6C1',
        'rose-gold': '#E8B4B8',
        'pastel-purple': '#D4A5D9',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['TTFirsNeue', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
        'custom': ['TTFirsNeue', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'sparkle': 'sparkle 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 182, 193, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 182, 193, 0.8), 0 0 30px rgba(255, 182, 193, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
