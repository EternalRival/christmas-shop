import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const HTML_PATH = './src/index.html';
const TS_PATH = './src/index.ts';
const OUTPUT_PATH = './dist';

const isProduction = process.env['NODE_ENV'] === 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      auto: true,
      namedExport: false,
      localIdentName: isProduction ? '[hash:base64]' : '[path][name]__[local]',
    },
  },
};

/** @type {import('webpack').Configuration} */
export default {
  mode: isProduction ? 'production' : 'development',
  entry: TS_PATH,
  output: {
    clean: true,
    path: path.resolve(import.meta.dirname, OUTPUT_PATH),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: HTML_PATH,
    }),

    ...(isProduction ? [new MiniCssExtractPlugin()] : []),
  ],
  module: {
    rules: [
      { test: /\.ts$/i, loader: 'ts-loader' },
      { test: /\.css$/i, use: [stylesHandler, cssLoader] },
      { test: /\.(svg|woff2|png)$/i, type: 'asset' },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '...'],
    alias: {
      '~': path.resolve(import.meta.dirname, 'src'),
    },
  },
};
