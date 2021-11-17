require("webpack");
const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const cssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        front: "./assets/js/front.js",
    },

    output: {
        path: path.resolve(__dirname, "public/build"),
        filename: "js/[name].js",
        publicPath: "build/"
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {sourceMap: true}
                    }
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "image/[name][ext]"
                }
            },

            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ["@babel/plugin-proposal-object-rest-spread"]
                }
            }
        ]
    },

    optimization: {
        minimizer: [new cssMinimizerWebpackPlugin()],
    },

    plugins: [
        new miniCssExtractPlugin({filename: "css/[name].css"})
    ]
}