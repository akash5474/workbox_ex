const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    plugins: [
        new WorkboxPlugin.GenerateSW({
            manifestTransforms: [
                (entries) => {
                    console.log('\n\nEntries:', entries);
                    console.log('Length:', entries.length, '\n\n');
                    return entries;
                }
            ]
        })
    ]
}