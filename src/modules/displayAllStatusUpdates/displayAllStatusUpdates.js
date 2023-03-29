import { getUsers } from "../getUsers/getUsers";
import { statusUpdatesContainer } from "../globals/globals";
async function displayAllStatusUpdates() {
    const userData = await getUsers();
    statusUpdatesContainer.innerHTML = "";
    for (const username in userData) {
        const statusUpdate = userData[username].statusUpdates;
        const statusUpdateElement = document.createElement('p');
        statusUpdateElement.innerText = `${username}: ${statusUpdate}`;
        statusUpdatesContainer?.appendChild(statusUpdateElement);
    }
}
export { displayAllStatusUpdates };
