module.exports = {
  entry: "./src/main.js",

  output: {
    path: __dirname + "/public/static/build/",
    filename: "main.js",
    publicPath: "static/build/"
  },

  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: "eslint-loader", exclude: [/node_modules/, /public/] },
    ],
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader!autoprefixer-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!autoprefixer-loader!less-loader"},

      { test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" },
      { test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
      { test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" },
      { test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" },
      { test: /\.(woff|woff2|ttf|eot)/, loader: "url-loader?limit=1" },

      { test: /\.jsx?$/, loader: "react-hot!babel", exclude: [/node_modules/, /public/] },

      { test: /\.json$/, loader: "json-loader"}
    ]
  },

  resolve : {
    extensions: ["", ".js", ".jsx"],
    alias : {
      actions : __dirname + "/src/actions",
      api : __dirname + "/src/api",
      components : __dirname + "/src/components",
      pages : __dirname + "/src/pages",
      stores : __dirname + "/src/stores",
      EventConstants : __dirname + "/src/EventConstants.js",
    }
  },

  eslint: {
    configFile: ".eslintrc"
  }
};
