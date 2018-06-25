const path = require('path')
const nodeExternals = require("webpack-node-externals");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT = path.resolve(__dirname, "..");
const getRoot = path.join.bind(path, ROOT);


const endsWithFilter = (...extensions) => {
  return (filename) => {
      return extensions.some(ext => {
          return filename.endsWith(ext);
      });
  };
};


module.exports = {

      entry: {
            desktop: getRoot("src/desktop/desktop.ts"),
      },

      output: {
            filename: "main.js",
            path: path.resolve(__dirname, "../dist", "desktop")
      },

      mode: 'none',


      target: "electron-main",

      node: {
        __dirname: false,
        __filename: false
      },

      externals: [nodeExternals()],

      resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx", ".json"],
      },

      devtool: "#source-map",

      module: {
        rules: [
          {
            test: endsWithFilter(".ts", ".tsx"),
            loader: "ts-loader",
            options: {transpileOnly: true},
          },
        ]
      },

      plugins: [
        new CleanWebpackPlugin('dist', {root: getRoot()})
      ]

};
