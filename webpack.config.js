const path = require('path');

module.exports = () => {
    return {
        entry: "./src/app.js",
        mode: "development",
        output: {
            path: path.join(__dirname , "public"),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }]
        },
        devtool: 'eval-cheap-module-source-map',
        devServer: {
            contentBase: path.join(__dirname , 'public')
        }
    };
};