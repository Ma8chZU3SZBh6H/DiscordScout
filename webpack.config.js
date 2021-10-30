const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
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
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        include: /src/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
