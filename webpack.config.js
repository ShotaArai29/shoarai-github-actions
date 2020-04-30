const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        helloWorld: "./src/helloWorld.js",
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },

    externals: {
        // jquery: "jQuery",
        // swal: "Swal",
        // react: "React",
        // "react-dom": "ReactDOM",
        // moment: "moment",
        // spin: "Spin",
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {},
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader", // compiles Sass to CSS, using Node Sass by default
                ],
            },
        ],
    },
    devtool: "source-map",
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
};
