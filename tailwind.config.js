/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom right, #05f, #21d6ef)",
        "text-gradient": "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
        'confetti-gradient': 'radial-gradient(56.8% 50% at 50% 50%, #ffeccc 0, hsla(0, 0%, 100%, 0) 100%)',
      },
    },
  },
  plugins: [],
};
