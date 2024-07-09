import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "infinite-scroll": {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(-100%)' },
        },
        "heading-one-first": {
          '0%': {
            letterSpacing: '.15vw',
            fontWeight: '900',
            fontVariationSettings: '"wght" 900, "wdth" 10',
            marginLeft: '.4vw'
          },
          '99%': {
            letterSpacing: '-.65vw',
            fontWeight: '900',
            fontVariationSettings: '"wght" 200, "wdth" 100',
            marginLeft: '0px'
          },
          '100%': {
            fontWeight: '400',
            fontVariationSettings: '"wght" 200, "wdth" 100',
            letterSpacing: 'normal',
            marginLeft: '0px'
          }
        },
        "heading-one": {
          '0%': {
            fontVariationSettings: '"wght" 200, "wdth" 10',
            letterSpacing: '.15vw',
            marginLeft: '.4vw',
            visibility: 'hidden',
            transform: 'skew(0, 0)'
          },
          '1%': {
            fontVariationSettings: '"wght" 200, "wdth" 10',
            letterSpacing: '.15vw',
            marginLeft: '.4vw',
            visibility: 'visible',
            transform: 'skew(0, 0)'
          },
          '99%': {
            fontVariationSettings: '"wght" 900, "wdth" 150',
            letterSpacing: '-0.65vw',
            marginLeft: '0px',
            visibility: 'visible',
            transform: 'skew(0, -12deg)'
          },
          '100%': {
            fontVariationSettings: '"wght" 900, "wdth" 150',
            letterSpacing: '-0.65vw',
            marginLeft: '0px',
            visibility: 'hidden',
            transform: 'skew(0, -12deg)'
          }
        },
        "heading-skew": {
          '0%': {
            transform: 'skew(0deg, 0deg)'
          },
          '100%': {
            transform: 'skew(0deg, -6.5deg)'
          }
        }
      },
      animation: {
        "infinite-scroll": "infinite-scroll 60s linear infinite",
        "heading-one-first": "heading-one-first 1000ms linear 1",
        "heading-one": "heading-one 2000ms linear 1"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
