/* eslint-disable arrow-parens */
/* eslint-disable prefer-spread */
/* eslint-disable no-underscore-dangle */
const path = require('path');
const webpack = require('webpack');

// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const HtmlPlugin = require('html-webpack-plugin');

const _root = path.resolve(__dirname, '.');

const root = args => {
  args = typeof args === Array ? [...args] : args;
  console.log(args)
  return path.join(_root, ...args);
};

module.exports = {
  resolve: {
    extensions: [ '.js', '.vue' ],
    alias: {
      Interface: path.resolve(__dirname, 'src/components/Interface/'),
      '@oficiona': root('oficiona'),
      '@': root('src'),
    },
  },
  plugins: [new webpack.IgnorePlugin(/logger/)],
};
