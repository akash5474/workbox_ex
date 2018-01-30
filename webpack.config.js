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

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.template.html'
        }),

        // Does not cache html generated server side.

        new WorkboxPlugin.GenerateSW({
            swDest: '../../service-worker.js',
            navigateFallback: '/static/app/index.html',
        }),


        // Does not update revision for entry in
        // precache-manifest if webpack assets' hash changes.

        // new WorkboxPlugin.GenerateSW({
        //     swDest: '../../service-worker.js',
        //     navigateFallback: '/',
        //     templatedUrls: {
        //         '/': ['./server.js']
        //     }
        // }),
    ]
}
