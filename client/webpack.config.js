const devMode = true;
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // extract defaults HTML <head> styles write by webpack 'style-loader' into separeted .css files [documentation](https://github.com/webpack-contrib/mini-css-extract-plugin)

/**
 * css extract's config on PROD ENV
 */
const cssExtract = {
    loader: MiniCssExtractPlugin.loader
};

/**
 * Default loaders for all !
 */
const cssLoaders = [
    devMode ? 'style-loader' : cssExtract,
    {
        loader: 'css-loader',
        options: {
            importLoaders: 1
        }
    }, // translates CSS into CommonJS
    {
        loader: 'postcss-loader',
        options: {
            plugins: loader => [
                require('autoprefixer')({
                    browsers: ['last 2 version', 'ie > 8']
                })
            ]
        }
    }
];

module.exports = {
    // watch: devMode,
    watchOptions: {
        aggregateTimeout: 1000, // wait before re-pack
        ignored: /node_modules/
    },
    node: {
        fs: 'empty'
    },
    mode: devMode ? 'development' : 'production',
    entry: './js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'assets'),
        publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: cssLoaders
            },
            {
                test: /\.scss$/,
                use: [
                    ...cssLoaders, // default loaders for .css
                    'sass-loader' // + add : compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }
};

/**
 * D O C U M E N T A T I O N :
 * chargement de modules:
 *   le chargement des module se lis de droite à gauche pour l'odre d'application, ex : use: ['style-loader', 'css-loader'] ==> css-loader, puis style-loader
 * watcher :
 *   https://webpack.js.org/configuration/watch/
 */
