var webpack = require('webpack');
var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
    entry:{
        liba: ['./a'],
        libb: ['./b'],
        main1: './main',
        main2: './main.2'
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
    ]
};
