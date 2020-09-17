// So, how we can import the other javascript file into other file we are gonna import './filename'
// it cannot import the functions which are present there so we have to write this manually.
// we have to write export before the function name
// or you can write like export {functionname1, functionname2,...};

const body = document.querySelector('body');
const styleBody =() => {
    body.style.background = 'peachpuff';
};

const addTitle = (text) => {

    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};

const contact = 'ahmed@gmail.com';
export {styleBody, addTitle, contact};