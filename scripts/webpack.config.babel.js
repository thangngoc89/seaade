import path from "path"
import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import renderer from "./renderer"

export default ({ config }) => ({
  ...config.dev && {
    devtool: "cheap-module-eval-source-map",
  },
  module: {
    loaders: [
      {
        test: /\.md$/,
        include: /content/,
        loader: "statinamic/lib/content-loader",
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
        test: /global.styles$/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader!sass-loader",
        ),
      },
      {
        test: /\.(html|ico|jpe?g|png|gif|svg|eot)$/,
        include: /web_modules/,
        loader: "file-loader?name=[hash:base64].[ext]",
      },
    ],
  },

  statinamic: {
    loader: {
      context: path.join(config.cwd, config.source),
      renderer,
    },
  },

  sassLoader: {
    includePaths: [
      path.join(config.cwd, "web_modules/styles"),
      path.join(config.cwd, "web_modules"),
      path.join(config.cwd, "node_modules"),
    ],
  },

  plugins: [
    new ExtractTextPlugin("[name].[hash].css", { disable: config.dev }),
    new webpack.DefinePlugin({ "process.env": {
      NODE_ENV: JSON.stringify(
        config.production ? "production" : process.env.NODE_ENV
      ),
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
    path: path.join(config.cwd, config.destination),
    publicPath: config.baseUrl.pathname,
    filename: "[name].[hash].js",
  },
  resolve: {
    extensions: [ ".js", ".json", "" ],
    root: [ path.join(config.cwd, "node_modules") ],
  },
  resolveLoader: { root: [ path.join(config.cwd, "node_modules") ] },
})
