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
        "scand-interior": "url('/hero/scandinavian.jpeg')"
      },
      colors: {
        "trans-black": "rgba(0, 0, 0, 0.17)",
        "light-gray": "#9F9F9F",
        "medium-gray": "#666",
        "light-black": "#333",
        "sand": "#FFF3E3",
        "gold": "#B88E2F",
      }
    },
  },
  plugins: [],
};
export default config;
