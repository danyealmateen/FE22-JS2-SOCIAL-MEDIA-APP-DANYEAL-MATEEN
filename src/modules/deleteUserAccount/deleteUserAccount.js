import { inputUsername, inputPassword, inputForMessages, avatarIMGS, currentStatusData } from "../globals/globals";
let userInfo = {
    username: inputUsername.value,
    password: inputPassword.value,
    statusUpdates: [inputForMessages.value],
    imageURL: avatarIMGS.value,
};
//DELETE ACC
async function deleteUserAccount() {
    const url = `https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/${inputUsername.value}.json`;
    const init = {
        method: "DELETE",
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
    const userAccounts = await response.json();
}
export { deleteUserAccount };
