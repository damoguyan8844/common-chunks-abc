var webpack = require('webpack');

module.exports = {
    entry:{
        main1: './main',
        main2: './main.2',
        lib: ['./a','./b']
    },
    output:{
        filename:'dist_ab/bundle.[name].js'
    },
    plugins: [
        new  webpack.optimize.CommonsChunkPlugin({
		    name: 'lib',
		    chunks: ['main1','main2']
	    })
    ]
};
