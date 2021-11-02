const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tailwindcss = require("tailwindcss");
const autoprefix = require("autoprefixer");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const path = require("path");

const target = process.env.TARGET ?? "electron-renderer";

module.exports = {
  mode: "development",
  target: target,
  entry: "./src/frontend/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "/src/"),
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                tsx: true,
                syntax: "typescript",
              },
            },
          },
        },
      },
      {
        test: /\.(css|s[c,a]ss)$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "/src/frontend"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [tailwindcss("./tailwind.config.js"), autoprefix],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new Dotenv(),
  ],
  output: {
    path: path.join(__dirname, "/dist/frontend"),
  },
};
