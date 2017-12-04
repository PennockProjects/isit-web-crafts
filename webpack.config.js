var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './source/index',
    output: {
        path: __dirname,
        filename: 'public/javascripts/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react', 'stage-2']
                }
            },{
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ],

    },
    devtool: 'source-map'
};