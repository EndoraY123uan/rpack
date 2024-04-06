const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCss = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano");

module.exports = {
  // 生产模式
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
    }),
    new optimizeCss({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
  ],
  // optimization:{
  //   splitChunks:{
  //     cacheGroups: {
  //       commons: {
  //         name: 'commons',
  //         chunks: 'initial',
  //         minChunks: 2
  //       }
  //     }
  //   }
  // }
};
