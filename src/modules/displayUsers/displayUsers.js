import { getUsers } from "../getUsers/getUsers";
import { profileInfoContainer } from "../globals/globals";
async function displayUsers() {
    const userData = await getUsers();
    const getusernamesFromObj = Object.entries(userData);
    const userNameContainer = document.getElementById('userNameContainer');
    userNameContainer.innerHTML = "";
    getusernamesFromObj.forEach(username => {
        console.log("Checking username", username);
        const ele = document.createElement('div');
        ele.setAttribute("id", "users");
        ele.innerText = `${username[0]}`;
        ele.addEventListener('click', () => {
            const userValues = Object.values(username);
            displayClickedUser(userValues[1]);
            // profileInfoContainer.innerHTML = `
            // <img id="profileIMG" src="${userValues[1].imageURL}"/><br>
            // <p>Userprofile: </p><p id="selectedUser">${userValues[1].username}</p><br>
            // Messages: ${userValues[1].statusUpdates || ""}`
        });
        userNameContainer.appendChild(ele);
    });
}
function displayClickedUser(userValues) {
    // const selectedUser = document.getElementById('selectedUser');
    profileInfoContainer.innerHTML = `
<img id="profileIMG" src="${userValues.imageURL}"/><br>
<div>Userprofile: </div><div id="selectedUser">${userValues.username}</div><br>
Messages: ${userValues.statusUpdates || ""}`;
}
export { displayUsers, displayClickedUser };
