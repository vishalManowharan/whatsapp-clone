
   document.getElementsByClassName('chats')[0].addEventListener("click",add1);


function add1 () {
    document.getElementsByClassName('chats')[0].classList.add("chatsa");
}
document.getElementsByClassName('chats')[1].addEventListener("click",add2);


function add2 () {
    document.getElementsByClassName('chats')[1].classList.add("chatsa");
}

document.getElementsByClassName('chats')[2].addEventListener("click",add3);


function add3 () {
    document.getElementsByClassName('chats')[2].classList.add("chatsa");
}
document.getElementsByClassName('chats')[3].addEventListener("click",add4);


function add4 () {
    document.getElementsByClassName('chats')[3].classList.add("chatsa");
}
document.getElementsByClassName('chats')[4].addEventListener("click",add5);


function add5 () {
    document.getElementsByClassName('chats')[4].classList.add("chatsa");
}

document.getElementsByClassName('chats')[5].addEventListener("click",add6);


function add6 () {
    document.getElementsByClassName('chats')[5].classList.add("chatsa");
}
document.getElementsByClassName('chats')[6].addEventListener("click",add7);


function add7 () {
    document.getElementsByClassName('chats')[6].classList.add("chatsa");
}
document.getElementsByClassName('chats')[7].addEventListener("click",add8);


function add8 () {
    document.getElementsByClassName('chats')[7].classList.add("chatsa");
}
document.getElementsByClassName('chats')[8].addEventListener("click",add9);
function add9 () {
    document.getElementsByClassName('chats')[8].classList.add("chatsa");
}
document.getElementsByClassName('chats')[9].addEventListener("click",add10);
function add10 () {
    document.getElementsByClassName('chats')[9].classList.add("chatsa");
}
document.getElementsByClassName('chats')[10].addEventListener("click",add11);
function add11 () {
    document.getElementsByClassName('chats')[10].classList.add("chatsa");
}
document.getElementsByClassName('chats')[11].addEventListener("click",add12);
function add12 () {
    document.getElementsByClassName('chats')[11].classList.add("chatsa");
}
document.getElementsByClassName('chats')[12].addEventListener("click",add13);
function add13 () {
    document.getElementsByClassName('chats')[12].classList.add("chatsa");
}
document.getElementsByClassName('chats')[13].addEventListener("click",add14);
function add14 () {
    document.getElementsByClassName('chats')[13].classList.add("chatsa");
}
document.getElementsByClassName('chats')[14].addEventListener("click",add14);
function add15 () {
    document.getElementsByClassName('chats')[14].classList.add("chatsa");
}
document.getElementsByClassName('chats')[15].addEventListener("click",add16);
function add16 () {
    document.getElementsByClassName('chats')[15].classList.add("chatsa");
}
document.getElementsByClassName('chats')[16].addEventListener("click",add17);
function add17 () {
    document.getElementsByClassName('chats')[16].classList.add("chatsa");
}
document.getElementsByClassName('chats')[17].addEventListener("click",add18);
function add18 () {
    document.getElementsByClassName('chats')[17].classList.add("chatsa");
}
document.getElementsByClassName('chats')[18].addEventListener("click",add19);
function add19 () {
    document.getElementsByClassName('chats')[18].classList.add("chatsa");
}
document.getElementsByClassName('chats')[19].addEventListener("click",add20);
function add20 () {
    document.getElementsByClassName('chats')[19].classList.add("chatsa");
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

