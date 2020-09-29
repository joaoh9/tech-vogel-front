const path = require('path');

module.exports = {
  runtimeCompiler: true,
  transpileDependencies: ['vuetify'],
  publicPath: '/',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/api': '' },
        ws: true,
        changeOrigin: true,
      },
      '^/resend-confirmation-link': {
        target: 'https://run.mocky.io/v3/67948d36-0279-479c-9d06-02c4ea79ad37', // TODO
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
      '^/api-github': {
        target: 'https://github.com/login/oauth',
        pathRewrite: { '^/api-github': '' },
        changeOrigin: true,
      },
      '/api-github': {
        target: 'https://github.com/login/oauth',
        pathRewrite: { '^/api-github': '' },
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
        Pages: path.resolve(__dirname, 'src/Pages/'),
        Controllers: path.resolve(__dirname, 'src/controllers/'),
        Helpers: path.resolve(__dirname, 'src/helpers/'),
        Assets: path.resolve(__dirname, 'src/assets/'),
        Data: path.resolve(__dirname, 'src/data/'),
        Oficiona: path.resolve(__dirname, 'oficiona'),
        '@': path.resolve(__dirname, 'src'),
        '@config': path.resolve(__dirname, 'src/config'),
        Public: path.resolve(__dirname, 'public'),
      },
    },
  },
};
