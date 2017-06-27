var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: "./app.js",
    output: {
        path: path.join(__dirname, './dist'),
        filename: "main.js",
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:'/\.js$/',
                loader:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}