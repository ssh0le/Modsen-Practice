const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@api": path.resolve(__dirname, "src/api"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@global": path.resolve(__dirname, "src/global"),
      "@sagas": path.resolve(__dirname, "src/store/sagas"),
      "@store": path.resolve(__dirname, "src/store"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@selectors" : path.resolve(__dirname, "src/store/selectors"),
      "@weather-icons": path.resolve(__dirname, "src/assets/weather-icons"),
      "@background-images" :path.resolve(__dirname, "src/assets/background-images"),
      "@styles" :path.resolve(__dirname, "src/styles")
    }
  }
};