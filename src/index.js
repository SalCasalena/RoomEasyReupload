import io from 'socket.io-client';
const socket = io("http://localhost:3005");
const button = document.getElementById("send-button");
const input = document.getElementById("message-input");
let userId;
button.addEventListener("click", () => {
    if(input.value === "") return;

    socket.emit("message", input.value);
    input.value = "";
})

socket.on('welcome', id => {
    userId = id;
})
socket.on('receiveMessage', response => {

    const isOur = response.userId === socket.id;

    const messageWrapper = document.createElement("div");
    messageWrapper.classList.add("message-wrapper");
    if (!isOur) messageWrapper.classList.add("reverse");
    else messageWrapper.classList.remove("reverse");

    const innerMessage = document.createElement("div");
    innerMessage.classList.add("message-box-wrapper");
    if (!isOur) innerMessage.classList.add("foreign");
    else innerMessage.classList.remove("foreign");

    const messageBox = document.createElement("div");
    messageBox.classList.add("message-box");

    const textParagraph = document.createElement("p");
    textParagraph.innerText = response.message;

    messageWrapper.appendChild(innerMessage);
    innerMessage.appendChild(messageBox);
    messageBox.appendChild(textParagraph);

    const mainMessageContainer = document.querySelector(".chat-wrapper");
    mainMessageContainer.appendChild(messageWrapper);


    });
