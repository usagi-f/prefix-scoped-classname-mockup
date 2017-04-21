const plato = require('es6-plato');

const src = './src';
const outputDir = './report';
const platoArgs = {
    recurse: true,
    eslint: '.eslintrc'
};

function callback(reports) {
    const { total, average } = plato.getOverviewReport(reports).summary;

    const output = `
    Total
    ----------------------
    eslint: ${total.eslint}
    sloc: ${total.sloc}
    maintainability: ${total.maintainability}

    Average
    ----------------------
    eslint: ${average.eslint}
    sloc: ${average.sloc}
    maintainability: ${average.maintainability}

    ----------------------`;

    console.log(output);
}

plato.inspect(src, outputDir, platoArgs, callback);
