const babel = require('./babel.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: { ...babel }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, '../public/index.html'),
        }),
    ]
};
