const { resolve } = require('path')

module.exports = {
  //入口起点
  entry: './src/index.js',
  //输出
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
//   loader配置
  module:{
      rules:[
         {
             test:/\.css$/,
             use:[
                'style-loader',
                'css-loader' 
             ]
         },
         {
             test:/\.less$/,
             use:[
                 'style-loader',
                 'css-loader',
                 'less-loader'
             ]
         }
      ]
  },
  //plugins的配置
  plugins:[],
  //模式
  mode:'development',//开发模式
}
