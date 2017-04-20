'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Prefix = require('./src/utils/prefix');
const prefix = new Prefix().getPrefix();

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
                    use: ['css-loader', 'postcss-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('postcss-import'),
                    require('postcss-css-variables'),
                    require('postcss-nested'),
                    require('postcss-class-prefix')(
                        prefix
                    ),
                    require('autoprefixer')({
                        browsers: [
                            'last 2 versions'
                        ]
                    }),
                    require('cssnano')({
                        safe: true
                    })
                ]
            },
        }),
    ]
};

module.exports = [jsconfig, cssconfig];
