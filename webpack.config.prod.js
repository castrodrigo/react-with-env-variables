const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");
const fs = require("fs");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const rootPath = path.join(__dirname);
  const envFile = rootPath + "/.env";

  const envKeys = Object.keys(envFile).reduce((acum, item) => {
    acum[`process.env.${item}`] = JSON.stringify(envFile[item]);
    return acum;
  }, {});

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "js-bundle.js"
    },
    module: {
      rules: [{ test: /\.(js)$/, use: "babel-loader" }]
    },
    mode: "production",
    plugins: [
      new htmlWebpackPlugin({
        template: "public/index.html"
      }),
      new webpack.DefinePlugin(envKeys)
    ]
  };
};
