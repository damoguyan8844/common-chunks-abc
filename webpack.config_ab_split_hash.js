var webpack = require('webpack');
var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
    entry:{
        main1: './main',
        main2: './main.2',
        liba: ['./a'],
        libb: ['./b'],
    },
    output: {
        path: path.join(__dirname, 'dist_ab_split_hash/'),
        filename: '[name]-bundle.[chunkhash:8].js',
        sourceMapFilename:'[name]-map.json',
        chunkFilename:'[name]-bundle.[chunkhash:8].js'
    },
    plugins: [
        new  webpack.optimize.CommonsChunkPlugin({
            names: ["libb","liba"],
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"entry-bundle",
            filename:"entry-bundle.[chunkhash:8].js"
        }),
        /*
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            minimize: true,
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
                semicolons: true,
            }
        }),
        */
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: JSON.stringify("development"),
                HostName: JSON.stringify("")},
            IS_LOCAL: true,
            TRACE_TURBOLINKS: true,
        }),
        new WebpackMd5Hash(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin('[name]-bundle.[contenthash:8].css', { allChunks: true }),
    ]
};
