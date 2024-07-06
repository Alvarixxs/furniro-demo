import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "scand-interior": "url('/hero/scandinavian.jpeg')",
        "subHeader": "url('/subheader/subheader.png')"
      },
      colors: {
        "trans-black": "rgba(0, 0, 0, 0.17)",
        "trans-white": "rgba(255, 255, 255, 0.72)",
        "very-light-gray": "#F4F5F7",
        "light-gray": "#9F9F9F",
        "medium-gray": "#666",
        "light-black": "#333",
        "sand": "#FFF3E3",
        "light-beige": "#FCF8F3",
        "gold": "#B88E2F",
        "orange-red": "#E97171",
        "turquoise": "#2EC1AC",
        "trans-gray":"rgba(58,58,58,0.72)"
      },
      transitionProperty: {
        "height": "height",
        "width": "width",
        "left": "left",
      },
      dropShadow: {
        'custom': '0px 4px 14px rgba(0, 0, 0, 0.16)',
      },
      keyframes: {
        appearFromBelow: {
          '0%': {transform: 'translateY(50%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
        appearFromRight: {
          '0%': {transform: 'translateX(-50%)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'},
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        'appear-from-below': 'appearFromBelow 1s ease-out',
        'appear-from-right': 'appearFromRight 300ms ease-out',
      }
    },
  },
  plugins: [],
};
export default config;
