const config = require('./webpack.config.js');

module.exports = {
    sections: [
        {
            name: 'containers',
            components: './src/components/containers/**/*.js',
        },
        {
            name: 'presentational',
            components: './src/components/presentational/**/*.js',
        },
    ],
    ignore: ['**/__tests__/**', '**/*.test.js', '**/*.spec.js'],
    webpackConfig: config[0],
    template: './styleguidist/template.html',
};
