module.exports = {
    entry: {
        myApp: "./app/javascript/index",
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                }
            ]
        }]
    },
    watch: true,
    devServer: {
        contentBase: './dist',
        port: '3000',
        inline: true
    }
}