const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
const webpackConfig = {
    mode: 'production',
    entry: {
        index: { import: './src/index.js' },
        another: { import: './src/another.js' },
    },
    devtool: "inline-source-map",
    devServer: {
        static: "/dist",
        port: 3000,
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({ title: "development" })
    ],
    optimization: {
        runtimeChunk: 'single',
        usedExports: true
    },
    stats: { usedExports: true },
}

module.exports = webpackConfig;