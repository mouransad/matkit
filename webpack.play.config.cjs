const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;


/** @type {import('webpack').Configuration} */
const config = {
    mode: isProd ? "production" : "development",

    entry: path.resolve(__dirname, "playground/index.tsx"),

    output: {
        path: path.resolve(__dirname, "playground-dist"),
        filename: isProd ? "assets/js/[name].[contenthash:8].js" : "assets/js/[name].js",
        assetModuleFilename: "assets/media/[name][hash][ext][query]",
        clean: true,
        publicPath: '/'
    },

    devtool: isDev ? "cheap-module-source-map" : "nosources-source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
            "@src": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, 'src/components')
        },
    },

    devServer: {
        port: 3000,
        open: false,
        hot: true,
        compress: true,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                include: [path.resolve(__dirname, "playground"), path.resolve(__dirname, "src")],
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: [
                            ["@babel/preset-env", { targets: "defaults", modules: false }],
                            ["@babel/preset-react", { runtime: "automatic", development: isDev }],
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/i,
                type: 'asset'
            },
            {
                test: /.*\.module\.css$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                            modules: {
                                localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:6]",
                                exportLocalsConvention: "camelCaseOnly" // or "camelCase"
                            },
                            sourceMap: isDev,
                        },
                    },
                ]
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "playground/index.html"),
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? "assets/css/[name].css" : "assets/css/[name].[contenthash:8].css",
            chunkFilename: isDev ? "assets/css/[id].css" : "assets/css/[id].[contenthash:8].css",
        }),
    ],
};

module.exports = config;
