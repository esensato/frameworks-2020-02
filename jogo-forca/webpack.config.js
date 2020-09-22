const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = { entry: "./src/index.js",
output: { path: path.join(__dirname, "dist"),
filename: "bundle.js"
},
module: {
rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
},
plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }),
          new CopyPlugin({ patterns: [ { from: 'img' }, {from: 'node_modules/antd/dist/antd.css'}]})]
};