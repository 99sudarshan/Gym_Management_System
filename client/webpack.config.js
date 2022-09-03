const path = require("path");
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  output: {
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css"],
  },
};
