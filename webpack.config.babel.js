import path from "path"
import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"

import renderer from "./scripts/renderer.babel.js"

// note that this webpack file is exporting a "makeConfig" function
// which is used for phenomic to build dynamic configuration based on your needs
// see the end of the file if you want to export a default config
// (eg: if you share your config for phenomic and other stuff)
export const makeConfig = (config = {}) => {
  return {
    ...config.dev && {
      devtool: "#cheap-module-eval-source-map",
    },
    module: {
      noParse: /\.min\.js/,
      loaders: [
        {
          // phenomic requirement
          test: /\.md$/,
          loader: "phenomic/lib/content-loader",
        },
        {
          test: /\.json$/,
          loader: "json-loader",
        },
        {
          test: /\.js$/,
          loaders: [
            `babel-loader${
              config.dev
              ? "?cacheDirectory=true&presets[]=babel-preset-react-hmre"
              : "?cacheDirectory=true"
            }`,
            "eslint-loader?fix",
          ],
          include: [
            path.resolve(__dirname, "scripts"),
            path.resolve(__dirname, "web_modules"),
          ],
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(
            "style-loader",
            "css-loader" + (
              "?modules"+
              "&localIdentName=" +
              (
                process.env.NODE_ENV === "production"
                ? "[hash:base64:5]"
                : "[path][name]--[local]--[hash:base64:5]"
              ).toString()
            ) + "!" +
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

    phenomic: {
      contentLoader: {
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
      ...config.production && [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(
          { compress: { warnings: false } }
        ),
      ],
    ],

    output: {
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname,
      filename: "[name].[hash].js",
    },

    resolve: {
      alias: {
        "react": "preact-compat",
        "react-dom": "preact-compat",
      },
    },
    // resolve: {
    //   extensions: [ ".js", ".json", "" ],
    //   root: [ path.join(__dirname, "node_modules") ],
    // },
    // resolveLoader: { root: [ path.join(__dirname, "node_modules") ] },
  }
}

// you might want to export a default config for another usage ?
// export default makeConfig()
