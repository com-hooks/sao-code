
const { defineConfig } = require('@rspack/cli');
const rspack = require('@rspack/core');
const { VueLoaderPlugin } = require('vue-loader');
const baiscConfig = require('./config');
const path = require('path');
const mergeWith = require('lodash/mergeWith');

const config = defineConfig(mergeWith({}, baiscConfig, {
    context: __dirname,
    plugins: [
        new VueLoaderPlugin(),
        new rspack.HtmlRspackPlugin({
            template: './index.html'
        }),
        new rspack.DefinePlugin({
            __VUE_OPTIONS_API__: JSON.stringify(true),
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        }),
    ],
    entry: {
        web: './src/web/index.ts',
    },
    resolve: {
        alias: {
            "vue$": require.resolve('@vue/runtime-dom'),
            "@": path.join(__dirname, './src'),
            "packages": path.join(__dirname, './packages'),
        }
    },
    module: {
        rules: [
            // ...
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // 注意，为了绝大多数功能的可用性，请确保该选项为 `true`
                    experimentalInlineMatchResource: true,
                },
            },
        ],
    },
}, (objValue, srcValue) => {
    if (Array.isArray(objValue)) {
        return objValue.concat(srcValue);
    }
}));

module.exports = config;