// It is not complarsory that we created the document in the firebase all time.

const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameform = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');
// add a new chat
newChatForm.addEventListener('submit', e=> {

    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

// update username
newNameform.addEventListener('submit', e => {

    e.preventDefault();
    // update name via chatroom
    const newName = newNameform.name.value.trim();
    chatroom.updateName(newName);
    // reset the form 
    newNameform.reset();
    // show then hide the update message
    updateMssg.innerText = `Your name was update to ${newName}`;
    setTimeout(() => updateMssg.innerText = '',3000);
});

rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }

});

// check local storage for a name
const username = localStorage.username ? localStorage.username : 'anon';

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming',username);

chatroom.getChats((data) => {
    // console.log(data);
    chatUI.render(data);
});

// Changing username and Local Storage

