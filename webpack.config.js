const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.ts",
    myip: "./src/commands/myIP.ts",
    getpwd: "./src/commands/getPWD.ts",
    compfiles: "./src/commands/compFiles.ts",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
