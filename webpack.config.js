const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'dist/static'),
        publicPath: '/static/',
        filename: '[name].js',
    },

    plugins: [
        new WorkboxPlugin.GenerateSW({
            swDest: '../service-worker.js',
        })
    ]
}