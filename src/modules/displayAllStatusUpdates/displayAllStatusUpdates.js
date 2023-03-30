import { getUsers } from "../getUsers/getUsers";
import { statusUpdatesContainer } from "../globals/globals";
async function displayAllStatusUpdates() {
    const userData = await getUsers();
    statusUpdatesContainer.innerHTML = "";
    for (const username in userData) {
        const statusUpdate = userData[username].statusUpdates;
        if (statusUpdate && statusUpdate.length !== 0) {
            const statusUpdateElement = document.createElement('p');
            statusUpdateElement.innerText = `${username}: ${statusUpdate}`;
            statusUpdatesContainer?.appendChild(statusUpdateElement);
        }
    }
}
export { displayAllStatusUpdates };
