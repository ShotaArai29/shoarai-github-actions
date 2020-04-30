const path = require("path");
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
        ],
    },
    devtool: "source-map",
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
};
