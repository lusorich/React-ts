const path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        open: true,
        compress: true
    },
    entry: ['babel-polyfill', './app/index.js'],
    output: {
        filename: "index.js"
    },
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript'],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    }
                },
            }
        ],
    }
};
