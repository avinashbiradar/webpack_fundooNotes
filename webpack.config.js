module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //addthislineinwebpack.config.js
                exclude: /node_modules/,
                use: ['babel-loader'],
            }, 
            {
                test: /\.(png|svg|jpg|gif)$/, //addthislineinwebpack.config.js
                loader: 'svg-url-loader',
                // use: ['file-loader']
            },
            {
                test: /\.html$/, //addthislineinwebpack.config.js
                use: [
                    {
                        loader:'html-loader',
                        options:{minimize:true}
                    }
                ]
            },
            {
                test: /\.scss$/, //addthislineinwebpack.config.js
                exclude: /node_modules/,
                use: [
                      
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                        { 
                        loader: "sass-loader|css-loader|style-loader",
                        options: {
                          implementation: require("sass"),
                          sassOptions: {
                            fiber: require("fibers"),
                          },
                        },
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx','.scss'] //addthislineinwebpack.config.js
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        port: 4200
    }
};
