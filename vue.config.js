//const vuxLoader = require('vux-loader');

module.exports = {
  // configureWebpack: config => {
  //   vuxLoader.merge(config, {
  //     plugins: ['vux-ui', 'duplicate-style']
  //   });
  // },
  lintOnSave: process.env.NODE_ENV !== 'production'
};