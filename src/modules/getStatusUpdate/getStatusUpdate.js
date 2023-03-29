import { connectionErrorMsg } from "../globals/globals";
async function getStatusUpdate() {
    try {
        const inputUsername = document.getElementById("inputUsername");
        const url = `https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/${inputUsername.value}/statusUpdates.json`;
        const response = await fetch(url);
        const statusData = await response.json();
        let currentStatusData;
        if (statusData === "") {
            currentStatusData = [];
        }
        else if (typeof statusData === "string") {
            currentStatusData = [statusData];
        }
        else {
            currentStatusData = statusData;
        }
    }
    catch (error) {
        console.log(error + "Connection problem");
        connectionErrorMsg.innerHTML = "Connection problem.Try again later.";
    }
}
export { getStatusUpdate };
