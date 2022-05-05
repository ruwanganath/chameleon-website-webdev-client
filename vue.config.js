<<<<<<< HEAD
const path = require('path');
const webpack = require('webpack');
=======
const path = require("path");
const webpack = require("webpack");
>>>>>>> wensong

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
<<<<<<< HEAD
        src: resolveSrc('src'),
        'chart.js': 'chart.js/dist/Chart.js'
=======
        src: resolveSrc("src"),
        "chart.js": "chart.js/dist/Chart.js"
>>>>>>> wensong
      }
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
<<<<<<< HEAD
=======
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
        Popper: ["popper.js", "default"],
>>>>>>> wensong
      })
    ]
  },
  pwa: {
<<<<<<< HEAD
    name: 'Vue Light Bootstrap Dashboard',
    themeColor: '#344675',
    msTileColor: '#344675',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#344675'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
=======
    name: "Vue Light Bootstrap Dashboard",
    themeColor: "#344675",
    msTileColor: "#344675",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#344675"
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production"
>>>>>>> wensong
  }
};
