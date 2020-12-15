const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.jsx'],
    // Объединяем .js файлы в файл index_bundle.js внутри каталога /dist.
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            // css-loader для загрузки и объединения всех CSS файлов в один
            // style-loader добавит все стили внутрь тега документа style
            // Webpack выполняет loaders в обратном порядке (справа налево)
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png)$/,
                use: [{loader: 'file-loader'}],
            },
        ],
    },
    plugins: [
        // Генерирует HTML файл, затем вставляет в него скрипт и записывает файл dist/index.html
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html',
        }),
        // Копирует файлы и директории в dist/
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'public/img'),
                    to: path.join(__dirname, 'dist/img'),
                },
            ],
            options: {
                concurrency: 100,
            },
        }),
        // Очищает директорию dist/
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './public'),
        // Проксируем URL-адреса на отдельный backend-сервер
        proxy: {
            '/api': 'http://localhost:5000',
        },
    },
    devtool: 'source-map',
};
