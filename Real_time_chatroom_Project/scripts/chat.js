// Lecture 1 Chat Room Class& Adding Class

// adding new chat documents
// setting up a real-time listener to get new chats
// updating the room

class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;   
        // this.unsub for not creating the data initally update
    }
    async addChat(message){
        // format a chat object
        const now =new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        // save the chat document
        const response = await this.chats.add(chat);
        return response;
    }
    
    getChats(callback){
        // filter that data by specific room only.
        // filter that data in the created date.
        // after that click on the console error and configure the indexex in the firebase.

        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    // update the UI
                    callback(change.doc.data());
                }
            });
            });
    }
    updateName(username){
        this.username = username;
        localStorage.setItem('username', username);
    }
    updateRoom(room){
        this.room = room;
        if(this.unsub){
        this.unsub();  // code for not to listen any changes further.
        }
        console.log('room updated');
    }

}

// const chatroom = new Chatroom('gaming','shaun');
// console.log(chatroom);
// chatroom.addChat('hey buddy')
//     .then(() => console.log('chat added'))
//     .catch(err => console.log(err));

    // Lecture 2 Setting up a Real-time Listener


// the callback which we mention int he getChats the function what it can do
// when it calls back we have to written that also.
// now let say we gonna write on data

// chatroom.getChats((data) => {
//     console.log(data);
// });

// Lecture 3 Complex Queries

// Lecture 4 Updating the Room and Username

// chatroom.updateRoom('music');
// // and now if we put the code then it gonna work

// chatroom.getChats((data) => {
//     console.log(data);
// });
// setTimeout(() => {

//     chatroom.updateRoom('music');
//     chatroom.updateName('yoshi');
//     chatroom.getChats((data) => {
//         console.log(data);
//     });
//     chatroom.addChat('hello');
// }, 3000);