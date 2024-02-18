import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "focus-4px-primary-100":
            "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #e8ebf8",
        "focus-4px-gray-100":
            "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #EEF2F6",
        "focus-4px-error-100":
            "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2",
      },
      keyframes: {
        loadingFade: {
          "0%": { opacity: "0", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.3)" },
          "100%": { opacity: "0", transform: "scale(1)" },
        },
          type: {
              '0%': { width: '0ch' },
              '5%, 10%': { width: '1ch' },
              '15%, 20%': { width: '2ch' },
              '25%, 30%': { width: '3ch' },
              '35%, 40%': { width: '4ch' },
              '45%, 50%': { width: '5ch' },
              '55%, 60%': { width: '6ch' },
              '65%, 70%': { width: '7ch' },
              '75%, 80%': { width: '8ch' },
              '85%, 90%': { width: '9ch' },
              '95%': { width: '10ch' },
          },
      },
       animation: {
        "typing-1": "loadingFade 1s infinite 300ms",
        "typing-2": "loadingFade 1s infinite 400ms",
        "typing-3": "loadingFade 1s infinite 500ms",
            cursor: 'cursor .6s linear infinite alternate',
            type: 'type 1.8s ease-out .8s 1 normal both',
            'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
    },
  },
  plugins: [],
};
export default config;
