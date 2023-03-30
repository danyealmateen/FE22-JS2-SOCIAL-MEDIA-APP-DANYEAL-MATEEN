import { createUserBtn, postMessageBtn, loginBtn, deleteAccBtn } from "./src/modules/globals/globals";
import { createNewUser } from "./src/modules/createNewUser/createNewUser";
import { getUsers } from "./src/modules/getUsers/getUsers";
import { postMessages } from "./src/modules/postMessages/postMessages";
import { displayAllStatusUpdates } from "./src/modules/displayAllStatusUpdates/displayAllStatusUpdates";
import { logIn } from "./src/modules/logIn/logIn";
import { deleteUserAccount } from "./src/modules/deleteUserAccount/deleteUserAccount";
getUsers();
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logIn();
    displayAllStatusUpdates();
});
createUserBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createNewUser();
});
postMessageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("CHECKING POSTMSGBTN");
    postMessages();
});
deleteAccBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteUserAccount();
});
