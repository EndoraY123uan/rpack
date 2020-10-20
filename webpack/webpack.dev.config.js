
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    hot: false,
    open: true,
  },
  // 装载虚拟目录插件
  plugins: [new CleanWebpackPlugin()],
};
