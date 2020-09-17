// as Default export is a thing from which we can export as many things as we want.
// we have one default export per file.
const users = [

    {name: 'muhammad', premium: true},
    {name: 'ahmed', premium: false},
    {name: 'zahid', premium: true},
    {name: 'ali', premium: false}
];

const getPremUsers = (users) => {
    return users.filter(user => user.premium);
}


// export default users;
// we may remove the export keyword from function and from export default and we can achieve 
// this kind of thing as mentioned in below.

export {getPremUsers, users as default}
// Webpack dev server we used for the local development in the PC irrespective of the live server.
// run command {npm install webpack-dev-server@3.2.1}
// webpack.config.js after configure after installing the above line.
// we are adding like , devServer: {contentBase: path.resolve(__dirname, 'dist')}
// this is good as it can serve as a it is works as virtual assistant type of thing.
// so to this point there is no change in the file where it write code for browser compatable.
// we change the name of webpack to build.
// 
// and remove the above line which is babel.
// "babel": "node_modules/.bin/babel src/index.js -w -o dist/assests/bundle.js",

// the yellow warning which are showing to us is for developement and for published mode.
// So published mode is optimized but slow to run while developement mode is quick.
// how we can set up things.
// "build": "node_modules/.bin/webpack",
// "serve": "webpack-dev-server"
// we can write that --mode production
// --mode developement after the data 
// node_modules/.bin/webpack --mode production
// still there is an issue our code is not converting into older verrsions as babel does so how we can do this.
// run {npm install babel-loader --save-dev}
// then we are goin to create how the system module are going to work.
// module: {
//     rules:[{
//         test: /\.js$/,
//         exclude: /node_module/,
//         use:{
//             loader: 'babel-loader',
//             options: {
//                 presets: ['@babel/preset-env']
//             }
//         }
//     }]
// }
// above code looking for test js modules which are not comming
// from the node_module as it is exclude