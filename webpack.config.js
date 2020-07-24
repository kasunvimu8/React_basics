var path = require("path");

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

var config = {
    entry: path.resolve(__dirname,"./src/app/index.js"),
    devServer: {
        contentBase:path.resolve(__dirname,"./src"),
        historyApiFallback: true
    },
    output:{
        filename: "app/bundle.js"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};

module.exports = config;