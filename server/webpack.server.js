const path = require("path");
module.exports = {
  //Inform webpack that we are building a bundle
  //for nodeJs, rather than for the browser
  target: "node",

  //Tell webpack the root file of our
  //Server application
  entry: "./src/index.js",

  //Tell webpack where to put the output file
  //that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  //Tellwenpack to run babel on every fo;e ot rims through
  module: {
    rules: [
      {
        test: /\.js?$/, //This ensuraces that we are applying bable to only JS files
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
            "presets": [
                "@babel/react" , 
                "@babel/env" , 
            ],
            "plugins": [
                "@babel/plugin-proposal-class-properties"
            ]
        },
      },
    ],
  },
};
