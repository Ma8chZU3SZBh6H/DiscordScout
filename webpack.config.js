const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tailwindcss = require("tailwindcss");
const autoprefix = require("autoprefixer");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: /src/,
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
        include: /src/,
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
  ],
};
