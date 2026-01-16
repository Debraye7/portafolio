import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], 
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background': {
          'light-primary': '#fbf9fa',
          'light-secondary': '#f6f3f4',
          'dark-primary': '#030712',
          'dark-secondary': '#101828',
        },
        'dividers': {
          'light': '#ebe6e7',
          'dark': '#1e2939',
        },
        'text': {
          'light-title': '#101828',
          'light-primary': '#364153',
          'light-secondary': '#4a5565',
          'dark-title': '#f6f3f4',
          'dark-primary': '#d1d5dc',
          'dark-secondary': '#99a1af',
          'muted': '#6a7282',
          'button': '#fbf9fa',
        },
        'accent': {
          'primary': '#2563eb',
          'hover': '#1d4ed8',
          'soft': '#dbeafe',
        },
        'status': {
          'error': '#dc2626',
          'warning': '#d97706',
          'success': '#16a34a',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
export default config;