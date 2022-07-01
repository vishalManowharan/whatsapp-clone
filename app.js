for(let i=0;i<30;i++) {
   document.getElementsByClassName('chats')[i].addEventListener("click",add);
}

function add () {
    document.getElementsByClassName('chats')[0].classList.add("chatsa");
}

function search () {
    let input, filter, chatList;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    chatList = document.getElementById("chat-list");
    chats = chatList.getElementsByClassName('div');
    for (let i=0;i<chats.length;i++) {
        a = chats[i].getElementsByClassName("h3");
    }
}

