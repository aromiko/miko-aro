const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.jsx", "./src/**/*.js", "./public/index.html"],
  css: ["./src/assets/main.css"],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("tailwind.js"),
    require("autoprefixer")
    // ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
