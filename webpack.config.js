const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html',
    })],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { plugins: ['react-hot-loader/babel'] },
                    },
                    'ts-loader',
                ].filter(Boolean),
            },
        ],
    },
};
