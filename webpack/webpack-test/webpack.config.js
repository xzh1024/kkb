const path = require("path");

module.exports = {
  // entry入口
  entry: "./src/index.js",
  // entry: {
  //   main: "./src/index.js",
  //   login: "./src/login.js",
  // },
  // output出口 必须是绝对路径（使用 Node.js 的 path 模块）
  // output: {
  //   path: path.resolve(__dirname, "./dist"),
  //   // 对于单个入口起点，filename 会是一个静态名称。
  //   filename: "[name].js" // 占位符 [name]
  // },
  // mode模式 打包模式：production development none
  mode: "development",
  // 模块，组件
  // module: {
  //   // 模块配置相关
  //   rules: [
  //     {
  //       test: /\.css$/i,
  //       // 多个loader作用于1个模块，执行顺序自后往前
  //       use: ["style-loader", "css-loader"],
  //     }
  //   ]
  // }
}