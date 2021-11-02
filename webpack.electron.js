const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/backend/main.ts",
  target: "electron-main",
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "/src/"),
        loader: "swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
            },
          },
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "/dist/backend"),
  },
  externals: {
    bufferutil: "bufferutil",
    "utf-8-validate": "utf-8-validate",
  },
};
