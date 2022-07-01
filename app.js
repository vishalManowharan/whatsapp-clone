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
    chats = chatList.getElementsByTagName('div');
    for (let i=0;i<chats.length;i++) {
        a = chats[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            chats[i].style.display = "";
        } else {
            chats[i].style.display = "none";
        }
    }
}

