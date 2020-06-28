const path = require('path');

module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
        ws: true,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: [ '.js', '.vue' ],
      alias: {
        Interface: path.resolve(__dirname, 'src/components/Interface/'),
        Components: path.resolve(__dirname, 'src/components/'),
        Controllers: path.resolve(__dirname, 'src/controllers/'),
        Helpers: path.resolve(__dirname, 'src/helpers/'),
        Assets: path.resolve(__dirname, 'src/assets/'),
        Data: path.resolve(__dirname, 'src/data/'),
        Oficiona: path.resolve(__dirname, 'oficiona'),
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
};
