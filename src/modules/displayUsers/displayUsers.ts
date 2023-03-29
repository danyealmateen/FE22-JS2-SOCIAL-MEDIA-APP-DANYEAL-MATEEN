import { getUsers } from "../getUsers/getUsers";
import { profileInfoContainer, displayUsernames } from "../globals/globals";

async function displayUsers() {
    const userData = await getUsers()
    const getusernamesFromObj = Object.entries(userData);

    getusernamesFromObj.forEach(username => {
        const ele = document.createElement('div');
        ele.innerText = `${username[0]}`
        ele.addEventListener('click', () => {
            const userValues: any = Object.values(username)

            profileInfoContainer.innerHTML = `
        <img id="profileIMG" src="${userValues[1].imageURL}"/><br>
        Userprofile: ${userValues[1].username}<br>
        Messages: ${userValues[1].statusUpdates}`

        })
        displayUsernames.appendChild(ele)
    });
}
export { displayUsers }