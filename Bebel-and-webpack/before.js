// if we want to add the babel lets create the modern javascript code.

const greet = (name) => {
    console.log(`Hello, ${name}`);
}
greet('Muhammad');
// in order to run that we first navigate to the babel which we just created.
// current folder -> .bin -> babel.
// run {node_modules/.bin/babel before.js -o after.js}
// we have to specify that which file we have to converted and which file we paste after converted that file.
// before running that we have to enable the windows Set-ExecutionPolicy RemoteSigned signed we run as an administrator and then we can create the file.
// All the packages we installed lived into the node module folder.
// and if we want to upload on the github it is not nessary to upload the modules folder.
// So, how the other developer run that code so that's thanks to the package.json.
// open the shell and run the {install npm} command.
// and it look on the package.json and it install all the packages what you need
