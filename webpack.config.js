const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/weight.js',
    output: {
        library: 'Weight.js',
        libraryTarget: 'umd',
        filename: 'weight.js',
        path: path.resolve(__dirname, 'dist'),
        globalObject: "typeof self !== 'undefined' ? self : this"
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};
