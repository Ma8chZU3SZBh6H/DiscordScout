const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
