/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F5F2',
        'paper-dim': '#EFEBE4',
        ink: '#211E1B',
        'ink-soft': '#524B44',
        blush: '#D79AA5',
        'blush-deep': '#B96E7C',
        'blush-pale': '#F0DBDF',
        moss: '#7C8367',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E\")",
        grid: 'linear-gradient(to right, rgba(33,30,27,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(33,30,27,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        card: '0 1px 0 rgba(33,30,27,0.06), 0 12px 30px -12px rgba(33,30,27,0.18)',
        frame: '0 2px 0 rgba(33,30,27,0.08), 0 24px 60px -20px rgba(33,30,27,0.28)',
      },
      animation: {
        'spin-slow': 'spin 16s linear infinite',
        marquee: 'marquee 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
