import { connectionErrorMsg } from "../globals/globals";
async function getUsers() {
    try {
        const url = `https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/.json`;
        const response = await fetch(url);
        const userData = await response.json();
        return userData;
    }
    catch (error) {
        console.log(error + "Connection problem");
        connectionErrorMsg.innerHTML = "Connection problem. Try again later";
    }
}
export { getUsers };
