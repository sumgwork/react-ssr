const path = require("path");

module.exports = {
  entry: "./src/client/client.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  // Run babel on every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            [
              "env",
              {
                targets: {
                  browsers: ["last 2 versions"],
                },
              },
            ],
          ],
        },
      },
    ],
  },
};
