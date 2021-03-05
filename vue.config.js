const path = require("path");
module.exports = {
  // 重新定义入口
  pages: {
    index: {
      entry: "test/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  lintOnSave: false,
  // 改成false 的 在打包之前 要改回true
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },

  chainWebpack: config => {
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        return options;
      });
  }
};
