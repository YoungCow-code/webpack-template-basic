// import
// Node js 에서 기본적으로 제공하는 전역모듈
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    //파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',
    
    // 결과물(번들)을 반환하는 설정
    output: {
        // Resolve 
        // 현재 지금 이파일이 존재하는 경로 webpack.config.jss는 경로가 C:\Users\KimYoungwoo\Desktop\FrontEnd\Webpack_Template_Basic
        // 그래서 이 현재 경로에 dist라는 폴더를 생성한다.
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                // .css로 끝나는 모든 파일들
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from: 'static'}
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
};

