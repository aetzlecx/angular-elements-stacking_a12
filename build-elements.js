const fs = require('fs-extra');
const concat = require('concat');

const distPath = './dist/wc';

(async function build() {
    const files = [
        `${distPath}/runtime.js`,
        `${distPath}/polyfills.js`,
        `${distPath}/main.js`
    ];
    await fs.ensureDir('elements');
    await concat(files, 'elements/wc.js');
})();
