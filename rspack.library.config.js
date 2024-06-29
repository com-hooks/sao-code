
const { defineConfig } = require('@rspack/cli');
const path = require('path');
const baiscConfig = require('./config');
const mergeWith = require('lodash/mergeWith');

const config = defineConfig(mergeWith({}, baiscConfig, {
    watch: false,
    cache: false,
    entry: {
        directives: './packages/directives/index.ts',
        thelotusroot: './packages/thelotusroot/index.ts',
        utils: './packages/utils/index.ts',
    },
    output: {
        clean: true,
        path: path.resolve(process.cwd(), 'dist/compress'),
        filename: '[name]/index.js',
        chunkFormat: 'module',
        module: true,
        library: {
            // do not specify a `name` here
            type: 'module',
        },
    },
    experiments: {
        outputModule: true,
    },
    externals: {
        'vue': 'vue',
        'lodash': 'lodash',
    },
}, (objValue, srcValue) => {
    if (Array.isArray(objValue)) {
        return objValue.concat(srcValue);
    }
}));
module.exports = config;