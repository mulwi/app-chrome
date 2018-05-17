var path = require('path');
var CopyWebpackPlugin = require("copy-webpack-plugin");

var production = process.env.NODE_ENV === "production";
var development = process.env.NODE_ENV === "development";

module.exports = {
    entry: {
        background: './src/background.ts',
        config: './src/background.ts',
        content: './src/content.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    optimization: {
        minimize: production
    },
    devtool: development ? 'source-map' : false,
    plugins: [
        new CopyWebpackPlugin([
            {from: './src/manifest.json', to: 'manifest.json'},
            {from: './src/assets/', to: 'assets'},
        ], {})
    ],
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 1000
    }
};