const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'dist/static/app'),
        publicPath: '/static/app/',
        filename: 'js/[name].[hash].js',
    },

    devServer: {
        historyApiFallback: true,

        contentBase: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.template.html'
        }),

        new WorkboxPlugin.GenerateSW({
            swDest: '../../service-worker.js',
            navigateFallback: '/',
            // templatedUrls: {
            //     '/': 'some-val'
            // }
        })
    ]
}