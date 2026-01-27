import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0f1f3d",
          yellow: "#f6c343",
          gray: "#4b5563",
          light: "#f8fafc"
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      borderRadius: {
        xl: "1rem"
      },
      boxShadow: {
        soft: "0 12px 30px -14px rgba(15, 31, 61, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
