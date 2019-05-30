const path = require('path');
// plugin to:
// ... copy HTML file
// ... insert script tag
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack important stuff: entrypoint, output, loaders, plugins (complex processing of input files)
module.exports = {
    entry: './src/js/index.js', // where webpack will start looking for dependencies
    output: { // tell webpack where to save the bundled files
        path: path.resolve(__dirname,'dist'), // needs to be an absolute path
        filename: 'js/bundle.js'
    },
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        })
    ]
};