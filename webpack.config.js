const path = require('path');
// plugin to:
// ... copy HTML file
// ... insert script tag
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack important stuff: entrypoint, output, 
//      loaders, (allow to import / process all kind of files (e.g. convert sass to css, convert es6 to es5 js))
//      plugins (complex processing of input files)
module.exports = {
    entry: ['@babel/polyfill',
        './src/js/index.js'
    ], // where webpack will start looking for dependencies
    output: { // tell webpack where to save the bundled files
        path: path.resolve(__dirname, 'dist'), // needs to be an absolute path
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};