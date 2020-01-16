module.exports = { /*Entrey - qual nosso arquivo principal */
    entry: ['@babel/polyfill','./src/main.js'],
    output: { /* Para qual lugar e arquivo devo enviar o codigo convertido pra antes do ECS6 */
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                }
            }
        ]
    }
};