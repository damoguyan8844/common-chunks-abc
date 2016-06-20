var webpack = require('webpack');

module.exports = {
    entry:{
        liba: ['./a'],
        libb: ['./b'],
        main1: './main',
        main2: './main.2'
    },
    output:{
        filename:'dist_ab_split/bundle.[name].js'
    },
    plugins: [
        new  webpack.optimize.CommonsChunkPlugin({
            names: ["libb","liba"],
            minChunks: Infinity
        })
    ]
};
