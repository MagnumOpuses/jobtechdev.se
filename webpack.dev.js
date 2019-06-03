//const merge = require("webpack-merge");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//const common = require("./webpack.common");
// change hugo's theme name as needed
const theme = 'hugo-theme-learn';

module.exports = {

    watch: true,
    watchOptions: {
        poll: true
    },
    context: process.cwd(),
    resolve: {
        extensions: ['.js', '.scss', '.css']
    },

    entry: ["./thebeginning/index.html"],

    mode: "development",

    devServer: {
        host: "localhost",
        port: 3000,
        contentBase: [path.join(process.cwd(), "./thebeginning"), path.join(process.cwd(), "./dist"), path.join(process.cwd(), "./site")],
        watchContentBase: true,
        stats: "none",
        quiet: false,
        open: true,
        historyApiFallback: {
            rewrites: [{from: /./, to: "404.html"}]
        }
    },
    plugins: [
        //new CleanWebpackPlugin(["dist/**/*.js", "dist/**/*.css", "site/content/webpack.json"]),

        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([
            {
                from: "./site/static/css/",
                to: "css/",
                flatten: true
            }
        ])
    ],
    output: {
        path: path.resolve(process.cwd(), 'themes', theme, 'static'),
        filename: "[name].js",
        chunkFilename: '[id].chunk.js',
    },
};
