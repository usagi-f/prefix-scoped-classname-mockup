'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsconfig = {
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
                use: 'babel-loader'
            }
        ]
    }
};


const cssconfig = {
    entry: [
        './src/components/index.css'
    ],
    output: {
        path: path.resolve('dest/css/'),
        filename: 'bundle.css',
        publicPath: '/css/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         postcss: [
        //             postcssImport(),
        //             postcssCssVariables(),
        //             postcssNested(),
        //             autoprefixer({
        //                 browsers: [
        //                     'last 2 versions',
        //                     'iOS > 8',
        //                     'ios_saf > 5.0',
        //                     'Android > 4.4'
        //                 ]
        //             }),
        //             cssnano({
        //                 safe: true
        //             })
        //         ]
        //     },
        // }),
    ]
};

module.exports = [jsconfig, cssconfig];
