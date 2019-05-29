const path = require('path');

module.exports = {
    entry: './src/js/index.js', // where webpack will start looking for dependencies
    output: { // tell webpack where to save the bundled files
        path: path.resolve(__dirname,'dist/js'), // needs to be an absolute path
        filename: 'bundle.js'
    }
};