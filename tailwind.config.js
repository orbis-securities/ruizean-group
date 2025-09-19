/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'funnel-display': ['var(--font-funnel-display)', 'sans-serif'],
        'funnel-sans': ['var(--font-funnel-sans)', 'sans-serif'],
        'pretendard': ['var(--font-pretendard)', 'system-ui', 'sans-serif'],
        'atkinson-mono': ['var(--font-atkinson-mono)', 'monospace'],
      },
      maxWidth: {
        'content': '1500px',
      },
    },
  },
  plugins: [],
}