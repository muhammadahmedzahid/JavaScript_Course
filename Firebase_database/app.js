// Lecture 01
// Sql database => Tables, Rows, Columns.
// NoSQL database => Collections, Documents, Properties.


// Lecture 02
// Firebase and Firestore
// We cannot write the code for the server to connect with the firebase database.
// After Sign in go to console for building up the project.
// Cloud Firestore is the feature than the firebase real-time database.
// auto-id gives you unique id in the firebase.
// we clearly see the collection, document and field we added in firebase.

// Lecture 03 Connecting to Firestore

// so you move back to the main project and click on the <> arrow like button.
// this gives you the code which you are going to connect with front end.
//  in order to install the npm we have to install the node.js first.

// Lecture 04 Getting Collections

// Well it return a promise() so we can use the then and catch method.
const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');
const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate();
    let html = `
    <li data-id=${id}>
        <div>${recipe.title}</div>
        <div>${time}</div>
        <button class= "btn btn-danger btn-sm my-2">delete</button>
    </li>

    `;
    list.innerHTML += html;
}
// Get documents
// db.collection('recepies').get().then(snapshort => {
//     // complete data what we get
//     console.log(snapshort);
//     // only indexed data we get
//     console.log(snapshort.docs[0].data());
//     snapshort.forEach(doc => {
//         // console.log(doc.data());
//         // Adding the recipe data into the front-end
//         addRecipe(doc.data(), doc.id);
//         // if we want to extract the id 
//         console.log(doc.id);
//     });
// }).catch(err => console.log(err));

// the above portion of code can execute for the very first.
// we make our code like that if anything changes in the database 
// it continously listining to that and make changes accordingly.

// real time delete recipe
const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    });
}

const unsub = db.collection('recepies').onSnapshot(snapshot => {
    // console.log(snapshot.docChanges());
    // whenever changes occurs the above line tell us about that.
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        console.log(doc);
        if(change.type === 'added'){
            addRecipe(doc.data(),doc.id);
        }else if(change.type === 'removed'){
            deleteRecipe(doc.id);
        }
    });
});

// Lecture 5 Saving Document

// add documents

form.addEventListener('submit', e=> {

    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    db.collection('recepies').add(recipe).then(() =>{
        console.log('recipe added');    
    }).catch(err => {
        console.log(err);
    });


});

// Lecture 6 Deleting Documents

// delete data

list.addEventListener('click', e => {

    // console.log(e);
    if(e.target.tagName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recepies').doc(id).delete().then(() => {
            console.log('recipe deleted');
        }).catch(err => console.log(err));
    }

});

// Lecture 7 Real-time Listeners
// currently the page cannot add automatically data into it.
// So, how we can do that let do it.

// Lecture 8 Unsubscribing

// unsub from database changes
// we store the callback to a constant and then we call them like that to do that functionality
button.addEventListener('click', () => {

    unsub();
    console.log('unsubscribed from collection changes');

});