/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url('./assets/Background@2x.png')",
      },
      gridTemplateColumns: {
        4: "repeat(4, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover"],
    },
  },
  plugins: [],
};
