const path = require('path')

module.exports = {
  entry: {
    main: './frontend/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    hot: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { test: /\.(ts|tsx)$/, use: ['ts-loader'] },
    ],
  }
}
