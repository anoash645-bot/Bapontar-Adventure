import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ocean: { 950: "#041B2B", 900: "#06283D", 700: "#0B4A6B" }, aqua: { 400: "#2CC7C0", 600: "#0E8F8B" }, sand: { 100: "#F6F0E4", 200: "#E9DCC3" }, ink: "#0F1B24" },
    fontFamily: { display: ["var(--font-display)", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
