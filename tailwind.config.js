/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  plugins: [require('tailwindcss-animate')],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFDF7',
          100: '#FFFAE7',
          200: '#FFF4C9',
          300: '#FFEEAA',
          400: '#FFE78C',
          500: '#FFE16D',
          600: '#FFD535',
          700: '#FCC800',
          800: '#C49B00',
          900: '#8C6F00',
          950: '#705900',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        level: {
          a: 'hsl(var(--level-a))',
          b: 'hsl(var(--level-b))',
          c: 'hsl(var(--level-c))',
          d: 'hsl(var(--level-d))',
          e: 'hsl(var(--level-e))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        xxs: '0.66667rem',
      },
      fontFamily: {
        'open-sans': ['Open Sans'],
        'squada-one': ['Squada One'],
      },
      keyframes: {
        ping3s: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        spin5s: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        fadeindown: {
          from: {
            opacity: '0',
            transform: 'scale(0.5) translateY(100%)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        ping3s: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        spin5s: 'spin5s 5s linear infinite',
        fadeindown: 'fadeindown 0.15s ease',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
};
