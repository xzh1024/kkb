const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/best-practice',
  devServer: {
    port: 7070,
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@comps': path.join(__dirname, 'src/components'),
  //     },
  //   },
  // },
  configureWebpack(config) {
    // config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.resolve.alias['@comps'] = path.join(__dirname, 'src/components');
    if (process.env.NOOE_ENV === 'development') {
      comfig.name = 'vue best practive';
    } else {
      config.name = 'vue项目最佳实践';
    }
  },
  chainWebpack(config) {
    // 1.添加一个loader，负责去icon目录中加载图标，方便直接使用
    config.module
      .rule('icon')
      .include.add(resolve('src/icon'))
      .end()
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' });

    // 2.当前项目下又一个家在svg的loader，svg规则排除icon目录
    config.module.rule('svg').exclude.add(resolve('src/icon'));
    /*
      调试命令：
        vue inspect
        vue inspect --rules
        vue inspect --rule svg
        vue inspect --rule icon
    */
  },
};
