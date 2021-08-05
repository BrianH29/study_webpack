var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none', //production, development, none
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      },
      /*{
        test : /\/js$/,
        use: ['babel-loader']
      },*/
      // {
      //   test:/\.sass$/,
      //   use: ['style-loader','css-loader','sass-loader']
      // }
    ]
  },
  /**
   * 플러그인은 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성이다.
   * 로더랑 비교하면 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 
   * 플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다.
   * 
   * 플러그인 전에는 main.css 가 bundle.gs에 포함 되어져 있었는데
   * 플러그인 이후 main.css 파일이 따로 생성 된다.
   */
  plugins: [
    new MiniCssExtractPlugin()
  ],
}