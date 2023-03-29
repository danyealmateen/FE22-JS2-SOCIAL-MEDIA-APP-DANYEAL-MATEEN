import { inputUsername, inputPassword, inputForMessages, avatarIMGS, postedMessagesContainer } from "../globals/globals";
import { displayAllStatusUpdates } from "../displayAllStatusUpdates/displayAllStatusUpdates";
let userInfo = {
    username: inputUsername.value,
    password: inputPassword.value,
    statusUpdates: [inputForMessages.value],
    imageURL: avatarIMGS.value,
};
console.log(inputForMessages.value);
let currentStatusData = [];
async function postMessages() {
    const inputForMessages = document.getElementById('inputForMessages');
    const inputUsername = document.getElementById("inputUsername");
    const inputPassword = document.getElementById("inputPassword");
    const url = `https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/${inputUsername.value}.json`;
    currentStatusData.push(inputForMessages.value);
    const init = {
        method: "PUT",
        body: JSON.stringify((userInfo = {
            username: inputUsername.value,
            password: inputPassword.value,
            statusUpdates: currentStatusData,
            imageURL: avatarIMGS.value,
        })),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    };
    const response = await fetch(url, init);
    const userData = await response.json();
    let postParagraph = document.createElement('p');
    postParagraph.innerText = `${inputUsername.value}${inputForMessages.value}`;
    postedMessagesContainer?.append(postParagraph);
    displayAllStatusUpdates();
}
export { postMessages };
