const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.common");
var CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, '..', "dist"),
    port: 3000,
    hotOnly: true,
    compress: true,
    open: true,
    historyApiFallback: true
  },
  devtool: "inline-source-map",
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
  ],
});
