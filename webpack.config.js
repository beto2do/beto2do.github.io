const path = require('path');
const merge = require("webpack-merge");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = merge([ {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
 }
]);

const productionConfig = merge([{
  plugins: [
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true
    })
  ],
  output: {
    chunkFilename: '[name].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}]);

const developmentConfig = {};

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode }); 
  }
  return merge(commonConfig, developmentConfig, { mode });
};