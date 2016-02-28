import path from "path"
import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"

import config from "./config.js"

export default {
  ...config.dev && {
    devtool: "cheap-module-eval-source-map",
  },
  module: {
    loaders: [
      {
        test: /\.md$/,
        include: /content/,
        loader: "statinamic/lib/md-collection-loader?" +
          JSON.stringify({
            context: path.join(config.cwd, config.source),
          }),
      },
      {
        test: /\.scss$/,
        include: /web_modules/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader" +
            "?modules"+
            "&localIdentName=[name]--[local]--[hash:base64:5]" +
          "!" +
          "sass-loader",
        ),
      },
      {
        test: /\global.styles$/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader" +
          "!" +
          "sass-loader",
        ),
      },
      {
        test: /\.(html|ico|jpe?g|png|gif|svg|eot)$/,
        include: /web_modules/,
        loader: "file-loader" +
          "?name=[hash:base64].[ext]&context=" +
          path.join(config.cwd, config.destination),
      },
    ],
  },

  sassLoader: {
    includePaths: [
      path.join(config.cwd, "web_modules/styles"),
      path.join(config.cwd, "web_modules"),
      path.join(config.cwd, "node_modules"),
    ],
  },
  markdownIt: (
    require("markdown-it")({
      // html: true,
      linkify: true,
      typographer: true,
    })
    .use(require("markdown-it-toc-and-anchor"), { tocFirstLevel: 2 })
  ),

  plugins: [
    new ExtractTextPlugin("[name].[hash].css", { disable: config.dev }),
    new webpack.DefinePlugin({ "process.env": {
      NODE_ENV: JSON.stringify(
        config.production ? "production" : process.env.NODE_ENV
      ),
      CLIENT: true,
      REDUX_DEVTOOLS: Boolean(process.env.REDUX_DEVTOOLS),
      STATINAMIC_PATHNAME: JSON.stringify(process.env.STATINAMIC_PATHNAME),
    } }),

    ...config.production && [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ],
  ],

  // ↓ HANDLE WITH CARE ↓ \\

  output: {
    libraryTarget: "commonjs2", // for node usage, undone in client config
    path: path.join(config.cwd, config.destination),
    publicPath: config.baseUrl.pathname,
  },
  resolve: {
    extensions: [ ".js", ".json", "" ],
    root: [ path.join(config.cwd, "node_modules") ],
  },
  resolveLoader: { root: [ path.join(config.cwd, "node_modules") ] },
}
