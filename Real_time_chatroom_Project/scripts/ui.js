// render chat templates to the DOM.
// clear the list of chats (when the room changes)
class ChatUI{
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = '';
    }
    // responsible for the html templates
    render(data){
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {addSuffix: true}
        );
        const html = `
            <li class="list-group-item">
            <span class = "username">${data.username}</span>
            <span class = "username">${data.message}</span>
            <div class = "time"> ${when}</div>
            </li>
        `;
        this.list.innerHTML += html;
    }
}