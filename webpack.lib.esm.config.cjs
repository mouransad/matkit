const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const fs = require("fs");

async function listDirectoryContentsSync(dirPath) {
    try {
        const entries = fs.readdirSync(dirPath);
        return entries;
    } catch (err) {
        console.error("Error reading directory:", err);
        return [];
    }
}

/** @type {import('webpack').EntryObject} */
const entries = {};

//#region Components Entries
const dir = fs.readdirSync(path.resolve(__dirname, "src/components-entries"));
for (const file of dir) {
    if (!/\.(t|j)sx?$/.test(file)) continue;
    const name = path.parse(file).name;
    entries[name] = {
        import: path.resolve(__dirname, "src/components-entries", file),
        filename: `components/${name}/index.mjs`,
        library: { type: 'module' }
    };
}
//#endregion

console.log(entries);

/** @type {import('webpack').Configuration} */
const config = {
    mode: "production",
    entry: entries,
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    externalsType: "module",

    experiments: {
        outputModule: true,
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
            "@src": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, "src/components"),
        },
    },

    externals: {
        react: "react",
        "react-dom": "react-dom",
        clsx: "clsx"
    },

    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                include: [
                    path.resolve(__dirname, "playground"),
                    path.resolve(__dirname, "src"),
                ],
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: [
                            ["@babel/preset-env", { targets: "defaults", modules: false }],
                            ["@babel/preset-react", { runtime: "automatic" }],
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/i,
                type: "asset",
            },
            {
                test: /\.module\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                            modules: {
                                localIdentName: "[hash:base64:6]",
                                exportLocalsConvention: "camelCaseOnly",
                            },
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].css",
        }),
    ],
};

module.exports = config;
