const path = require('path');
module.export = {
    entry: './src/index.js',
    output:{ 
    path: path.resolve(__dirname, 'dist/assests'),
    filename: 'bundle.js'
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        // then we are gonna write where are our assets files are there
        publicPath: '/assests'
        // "serve": "webpack-dev-server" add this file to the package.json
    },
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_module/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};
// we are going to add the abovecode code where we need the base folder
// !!! important point inside the src your file name must be index no other name is accepted.
// when you run that file the new file is created named as main.
// so every time when we have to pick that file we are gonna run that
// we may this in the package.json just after the babel file we entered.
// copy the path where your webpack file is and then add that.
// then run only that command npm run webpack
// one line of code means it is going to reduce the file size.
// this is the javascript which cannot run in the browser rather it is run into the local computer using node.js
// First of all we specify the root directory for that.
// __dirname gives you the current path which are currenlty in.
// as we have to specify that in the output file.
// we can use the node js libary in order to perform that.
// in the file name we have to write the on which file we are going to use that like bundle.js
// We have to install the webpack cli and core just like babel.
// {npm install webpack webpack-cli --save-dev}
// Again it is stored in node_module and in .bin and then webpack
// in order to run that we use node_modules/.bin/webpack.
// at this point the code cannot run in the order version as babel is doing.
// So, how we can achieve that kind of functionality.

