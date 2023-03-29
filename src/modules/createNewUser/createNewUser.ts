import { deleteAccBtn, inputUsername, inputPassword, inputForMessages, messagesForUser, postMessageBtn, avatarIMGS } from "../globals/globals";
import { getUsers } from "../getUsers/getUsers";

let userInfo: object = {
    username: inputUsername.value,
    password: inputPassword.value,
    statusUpdates: [inputForMessages.value],
    imageURL: avatarIMGS.value,
}

async function createNewUser() {
    deleteAccBtn.disabled = false;
    const url = `https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/${inputUsername.value}.json`;
    const init = {
        method: "PUT",
        body: JSON.stringify((userInfo = {
            username: inputUsername.value,
            password: inputPassword.value,
            statusUpdates: inputForMessages.value,
            imageURL: avatarIMGS.value,
        })),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    };
    const users = await getUsers();
    if (inputUsername.value in users) {
        console.log("User already exists");
        return;
    }
    if (inputUsername.value === "" || inputPassword.value === "") {
        return messagesForUser.innerText = `Must write something in both fields.`;
    }
    const response = await fetch(url, init);
    const data = await response.json();
    messagesForUser.innerText = `New user created. You may login.`;
}
postMessageBtn.addEventListener('click', (e) => {
    e.preventDefault();
});

export { createNewUser }