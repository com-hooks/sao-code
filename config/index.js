const path = require('path');

module.exports = {
    resolve: {
        extensions: [".js", ".json", ".wasm", '.ts', '.d.ts'],
        tsConfigPath: path.resolve(__dirname, '../tsconfig.json'),
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'builtin:swc-loader',
                options: {
                    jsc: {
                        parser: {
                            syntax: 'typescript',
                            decorators: true,
                        },
                    },
                },
                type: 'javascript/auto',
            },
        ],
    },
}
