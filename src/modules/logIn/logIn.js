import { deleteAccBtn, inputUsername, inputPassword, postMessageBtn, messagesForUser, createUserDiv, loggedInAs, postMessageContainer, displayUsernames, statusUpdatesContainer, avatarIMGS } from "../globals/globals";
import { displayUsers } from "../displayUsers/displayUsers";
import { displayAllStatusUpdates } from "../displayAllStatusUpdates/displayAllStatusUpdates";
import { getStatusUpdate } from "../getStatusUpdate/getStatusUpdate";
async function logIn() {
    const url = `https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/.json`;
    const response = await fetch(url);
    const userData = await response.json();
    if (inputUsername.value in userData && inputPassword.value === userData[inputUsername.value].password) {
        postMessageBtn.disabled = false;
        messagesForUser.innerText = `You've successfully logged in!`;
        createUserDiv.style.display = "none";
        loggedInAs.innerHTML = `You are logged in as: ${inputUsername.value} <img id="profileIMG" src="${avatarIMGS.value}"/>`;
        postMessageContainer.style.display = "block";
        deleteAccBtn.style.display = "block";
        displayUsernames.style.display = "block";
        statusUpdatesContainer.style.display = "block";
        getStatusUpdate();
        displayUsers();
        displayAllStatusUpdates();
    }
    else {
        messagesForUser.innerText = `Wrong username, wrong password or account does not exist.`;
        return;
    }
}
export { logIn };
