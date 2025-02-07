const msg = [
    "are you sure?",
    "soch le ik bar?",
    "reallllyy sure?",
    "pookie please...",
    "ik bar wapis soch le...",
    "if you say no, i will be really sad...",
    "i will be really very very sadddd...",
    "ok fine, I will stop asking...",
    "just kidding, say yes please! ❤️"

];

let msgIndex= 0;

function noClick(){
const noButton = document.querySelector('.no-button');
const yesButton = document.querySelector('.yes-button');
noButton.textContent = msg[msgIndex];
msgIndex = (msgIndex + 1)% msg.length;
const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function yesClick(){
    window.location.href = "yes_pg.html";
}