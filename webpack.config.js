'use strict';
const path = require('path');
// const webpack = require('webpack');

const config = {
    entry: [
        './src/components/index.js'
    ],
    output: {
        path: path.resolve('dest/js/'),
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            }
        ]
    },
    // plugins: [
    //     new webpack.LoaderOptionsPlugin({
    //         options: {
    //             postcss: [
    //                 postcssImport(),
    //                 postcssCssVariables(),
    //                 postcssNested(),
    //                 autoprefixer({
    //                     browsers: [
    //                         'last 2 versions',
    //                         'iOS > 8',
    //                         'ios_saf > 5.0',
    //                         'Android > 4.4'
    //                     ]
    //                 }),
    //                 cssnano({
    //                     safe: true
    //                 })
    //             ]
    //         },
    //     }),
    // ]
};

module.exports = config;
