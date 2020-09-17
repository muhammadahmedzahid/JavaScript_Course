// Every new update is not supported in the new browsers and after developing that feature it take.
// sometime to update that features so for that we are gonna use the Babel tool this works for us.
// and in order to organise our code there is a tool called webpack which we going to use with that.
// We have to install the Babel along with Node.js, NPM node package manager.
// to check the node installed or not put node -v
// now our code runs on our computer before it runs into the browser.
// when we installed node.js it automatically installed the npm manager.
// packages.json file to track the file into the computer.
// start with {npm init} type that. then press enter - enter it pops up the result.
// and now we have package.json file includes in our folder. and it record if any other packages we installed in it.
// now run that {npm install @babel/core @babel/cli --save-dev}
// the above command saves it developers code also.
// it will add this in your json code file.
// and we can only use that in this project and if we want to use them in order project we have to install them.
// Now we have another thing to install which allows us to use all the modern javascript features.
// type {npm install @babel/preset-env  --save-dev}
// .babelrc we have to define that also
// node.js convert javascript code in our computer.

const greet = (name) =>{
    console.log(`Hello ${name}`);
};

greet('Muhammad');


// so we are gonna write this every thing so whats we gonna do for that.
// we remove the old scrip which is named as test then we paste as the above script.
// named as babel and then paste that code and it works for you.
// run that command {npm run babel}
// the file we put into the script in package.json cannot running the file
// "babel": "node_modules/.bin/babel src/app.js -w -o dist/assests/bundle.js"
// after that we can run ones npm run babel and after that it watches the next time when code is changes.
