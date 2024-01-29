module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")]
    }
  }
};
