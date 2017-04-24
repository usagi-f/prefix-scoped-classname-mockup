const fs = require('fs');
const postcss = require('postcss');
const stylestats = require('postcss-stylestats');
const postcssImport = require('postcss-import');
const postcssCssVariables = require('postcss-css-variables');
const postcssNested = require('postcss-nested');

const settings = {
    entry: 'src/components/index.css',
    output: 'stylestats/index.json',
    options: {
        type: 'json',
    },
};

fs.readFile(settings.entry, (err, css) => {
    postcss([postcssImport, postcssCssVariables, postcssNested])
        .use(stylestats(settings.options))
        .process(css, { from: settings.entry})
        .then(result => {
            if (result.messages[0].stats) {
                fs.writeFile(settings.output, result.messages[0].stats, (err) => {
                    if (err) throw err;
                    console.log('writeFile Done !');
                });
            }
        });
});
