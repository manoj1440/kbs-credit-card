module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        surface: 'var(--color-surface)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        subtext: 'var(--color-subtext)',
        border: 'var(--color-border)',
        card: 'var(--color-card)',
        cardText: 'var(--color-card-text)',
        btn: 'var(--color-btn)',
        btnText: 'var(--color-btn-text)'
      }
    }
  },
  plugins: []
};