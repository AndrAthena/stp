const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    publicPath: 'auto',
  },
  mode: 'development',
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
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: './public/remoteEntry.js',
      library: { type: 'var', name: 'dashboard' },
      exposes: {
        './route': './src/route',
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
    new HtmlWebpackPlugin({
      template: './public/index.ejs',
    }),
  ],
  devServer: {
    port: 8001,
    static: path.join(__dirname, 'dist'),
  },
};
