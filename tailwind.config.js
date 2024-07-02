/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Kumbh: ["Kumbh Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      colors: {
        'bg-primary': '#070d06',
        'bg-secondary': '#1c2f1a',
        'bg-accent': '#091807',
        'bg-muted': '#243b21',
        'foreground': '#f8f9f8',
        'muted-foreground': '#869285',
        'border-primary': '#243b21',
        'border-secondary': '#101530',
        'primary': '#52c234',
        'primary-accent': '#03a003',
        'destructive': '#7f1d1d',
        'warning': '#ffa500',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(to right, #52c234 0%, #03a003 100%)',
        'gradient-2': 'linear-gradient(to right, #52c234 0%, #e1e3e1 100%)',
        'gradient-3': 'linear-gradient(190deg, #52c234 0%, rgba(18, 82, 78, 0.5) 100%)',
        'glow': 'radial-gradient(rgb(82, 194, 52, 0.1) 0%, rgba(7, 13, 6, 0.5))',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      backgroundClip: {
        text: 'text',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-clip-text': {
          'background-clip': 'text',
        },
        '.text-gradient-1': {
          'background-image': 'linear-gradient(to right, #52c234 0%, #03a003 100%)',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
        '.text-gradient-2': {
          'background-image': 'linear-gradient(to right, #52c234 0%, #e1e3e1 100%)',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
        '.text-gradient-3': {
          'background-image': 'linear-gradient(190deg, #52c234 0%, rgba(18, 82, 78, 0.5) 100%)',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
      }, ['responsive', 'hover']);
    }
  ],
}
