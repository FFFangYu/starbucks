const path = require('path'); // 引入path模块
function resolve(dir) {
    return path.join(__dirname,dir) //path.join(_dirname)设置绝对路径
}

module.exports = {
  css: {
    extract: false,
  },
  chainWebpack: (config) => {
    config.resolve.alias
        .set('@',resolve('src'))

    
    config.plugin("html").tap((args) => {
      args[0].title = "星巴克 | 用每一杯咖啡传递星巴克独特的咖啡体验";
      return args;
    });

    
  },
};
