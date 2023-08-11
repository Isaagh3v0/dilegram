const {resolve} = require('path')

/*
 * BY ENIGMA | DISCORD & TG: nahmnenickname
 * LICENSED BY MIT
 * GITHUB: Isaagh3v0
 */

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['babel-loader', 'ts-loader'],
                include: resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    target: 'node',
    node: {
        __dirname: true
    },
    stats: {warnings: false},
    plugins: []
};