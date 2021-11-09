const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    publicPath: '/stp/',
  },
  mode: 'production',
  watchOptions: {
    ignored: /node_modules/,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript', '@babel/preset-env'],
          plugins: ['@babel/proposal-class-properties', '@babel/transform-runtime'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.ejs',
    }),
    new ModuleFederationPlugin({
      name: 'main',
      filename: './public/remoteEntry.js',
      library: { type: 'var', name: 'main' },
      remotes: {
        dashboard: 'dashboard@[dashboardUrl]/remoteEntry.js',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  devServer: {
    port: 8000,
    static: path.join(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
