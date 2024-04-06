const path = require('path') // node自带 路径解析 模块
const fs = require('fs') // 文件系统

// 获取当前目录的绝对路径
const appDir = fs.readFileSync(process.cwd())

const resolveDir = relativePath => path.resolve(appDir,relativePath)

module.exports = {
  PUBLIC_PATH:'/',
  appRoot:resolveDir('.'),
  appIndex:resolveDir('src/index'),
  appDist:resolveDir('dist'),
  appSrc:resolveDir('src'),
  appEjs:resolveDir('src/index.ejs'),
  appPlubic:resolveDir('public'),
 appDll:resolveDir('dll')
}
