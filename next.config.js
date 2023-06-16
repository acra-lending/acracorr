const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
// const withSass = require("@zeit/next-sass");
// const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const path = require("path");

const nextConfig = {
  images: {
  disableStaticImages: true,
  },
};


module.exports = withPlugins([[withImages]], {
  // module.exports = withPlugins([[withSass], [withImages], [withCSS]], {
  // module.exports = {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    });
    return config;
  }
// };
});
