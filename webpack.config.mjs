import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'node:path';

const HTML_TEMPLATE_PATH = './index.html';

const isProduction = process.env['NODE_ENV'] === 'production';

/** @type {import('webpack').Configuration} */
export default {
  mode: isProduction ? 'production' : 'development',
  entry: {
    home: './src/app/routes/home.ts',
    gifts: './src/app/routes/gifts.ts',
  },
  output: {
    clean: true,
    filename: 'assets/[name]-[contenthash].js',
    assetModuleFilename: 'assets/[name]-[contenthash][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: HTML_TEMPLATE_PATH,
      chunks: ['home'],
      favicon: 'src/assets/icons/favicon.svg',
    }),
    new HtmlWebpackPlugin({
      filename: 'gifts/index.html',
      template: HTML_TEMPLATE_PATH,
      chunks: ['gifts'],
      favicon: 'src/assets/icons/favicon.svg',
    }),

    ...(isProduction
      ? [
          new MiniCssExtractPlugin({
            filename: 'assets/[name]-[contenthash].css',
            chunkFilename: 'assets/[name]-[contenthash].css',
          }),
        ]
      : []),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                namedExport: false,
                exportLocalsConvention: 'as-is',
                localIdentName: isProduction ? '[hash:base64]' : '[path][name]__[local]',
              },
            },
          },
        ],
      },
      {
        test: /\.(woff2|webp)$/i,
        type: 'asset',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '...'],
    alias: {
      '~': path.resolve('src'),
    },
  },
};
