import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-noto-sans-jp)"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        warm: {
          50: "#F7F4F2",
          600: "#C63D2F",
        },
      },
      fontSize: {
        xs: ["10px", "20px"],
        sm: ["14px", "28px"],
        base: ["18px", "28px"],
        "3xl": ["32px", "40px"],
      },
    },
  },
  plugins: [],
}
export default config
