/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'glow-primary': 'var(--glow-primary)',
        'glow-secondary': 'var(--glow-secondary)',
        'glow-accent': 'var(--glow-accent)',
        'glow-primary-strong': 'var(--glow-primary-strong)',
        'glow-secondary-strong': 'var(--glow-secondary-strong)',
        'glow-accent-strong': 'var(--glow-accent-strong)',
      },
      transitionTimingFunction: {
        gentle: 'var(--ease-gentle)',
      },
      transitionDuration: {
        standard: 'var(--transition-standard)',
      },
       animation: {
        'gradient-move': 'gradient-move 8s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s var(--ease-gentle) forwards',
        'ken-burns': 'ken-burns 20s ease-in-out infinite',
       },
       keyframes: {
         'fade-in-up': {
            'from': {
              opacity: '0',
              transform: 'translateY(20px)',
            },
            'to': {
              opacity: '1',
              transform: 'translateY(0)',
            },
         },
         'ken-burns': {
           '0%, 100%': { transform: 'scale(1.05) rotate(-1deg)' },
           '50%': { transform: 'scale(1.15) rotate(1deg)' },
         },
       },
    },
  },
  plugins: [],
}