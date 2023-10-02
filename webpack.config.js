const path = require('path');

module.exports = {
    entry: './react-src/index.js',
    output: {
        path: path.resolve('public/js'),
        filename: 'bundle.js'
    },
    mode: 'production', // or 'development'
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }, 
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
