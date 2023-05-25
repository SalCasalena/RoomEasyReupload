import io from 'socket.io-client';
const socket = io("http://localhost:3005");
const button = document.getElementById("send-button");
const input = document.getElementById("message-input");
button.addEventListener("click", () => {
    if(input.value === "") return;

    socket.emit("message", input.value);
    input.value = "";
})

socket.on('welcome', message => console.log(message))
socket.on('receiveMessage', message => {
    const messageWrapper = document.createElement("div");
    messageWrapper.classList.add("message-wrapper");

    const innerMessage = document.createElement("div");
    innerMessage.classList.add("message-box-wrapper");

    const messageBox = document.createElement("div");
    messageBox.classList.add("message-box");

    const textParagraph = document.createElement('p');
    textParagraph.innerText = message;

    messageWrapper.appendChild(innerMessage);
    innerMessage.appendChild(messageBox);
    messageBox.appendChild(textParagraph);



    const mainMessageContatiner = document.getElementsByClassName("chat-wrapper")[0];
    mainMessageContatiner.appendChild(messageWrapper);


    });

