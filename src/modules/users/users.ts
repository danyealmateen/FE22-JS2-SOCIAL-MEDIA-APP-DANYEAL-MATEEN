const createUserBtn = document.getElementById("createUserBtn") as HTMLButtonElement;

const inputUsername = document.getElementById(
  "inputUsername"
) as HTMLInputElement;

const inputPassword = document.getElementById(
  "inputPassword"
) as HTMLInputElement;

const displayUsernames = document.getElementById('displayUsernames') as HTMLElement;
const inputForMessages = document.getElementById('inputForMessages') as HTMLInputElement;
const postMessageBtn = document.getElementById('postMessageBtn') as HTMLButtonElement;
postMessageBtn.disabled = true;
const messagesForUser = document.getElementById('messagesForUser') as HTMLElement;
const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement;
const postedMessagesContainer = document.getElementById('postedMessagesContainer') as HTMLElement
const avatarIMGS = document.getElementById('avatarIMGS') as HTMLSelectElement
const createUserDiv = document.getElementById('createUserDiv') as HTMLElement
const postMessageContainer = document.getElementById('postMessageContainer') as HTMLElement
const loggedInAs = document.getElementById('loggedInAs') as HTMLElement;
let statusUpdatesContainer = document.getElementById('statusUpdatesContainer') as HTMLElement;
let profileInfoContainer = document.getElementById('profileInfoContainer') as HTMLElement;
const deleteAccBtn = document.getElementById('deleteAccBtn') as HTMLButtonElement;
let currentStatusData: string[];

let userInfo: object = {
  username: inputUsername.value,
  password: inputPassword.value,
  statusUpdates: [inputForMessages.value],
  imageURL: avatarIMGS.value,
}

//CREATE USERS
async function createNewUser() {
  deleteAccBtn.disabled = false;
  const url = `https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/${inputUsername.value}.json`;

  const init = {
    method: "PUT",
    body: JSON.stringify(
      (userInfo = {
        username: inputUsername.value,
        password: inputPassword.value,
        statusUpdates: inputForMessages.value,
        imageURL: avatarIMGS.value,
      })
    ),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const users = await getUsers()

  if (inputUsername.value in users) {
    console.log("User already exists")
    return;
  }

  if (inputUsername.value === "" || inputPassword.value === "") {
    return messagesForUser.innerText = `Must write something in both fields.`
  }

  const response = await fetch(url, init);
  const data = await response.json();

  messagesForUser.innerText = `New user created. You may login.`
}

postMessageBtn.addEventListener('click', (e) => {
  e.preventDefault()
})

//GET USERS
async function getUsers() {
  const url = `https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/.json`;
  const response = await fetch(url);
  const userData = await response.json();
  return userData;
}

//POST MESSAGES
async function postMessages() {

  const inputForMessages = document.getElementById('inputForMessages') as HTMLInputElement;
  const inputUsername = document.getElementById(
    "inputUsername"
  ) as HTMLInputElement;
  const inputPassword = document.getElementById(
    "inputPassword"
  ) as HTMLInputElement;

  const url = `https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/${inputUsername.value}.json`;

  currentStatusData.push(inputForMessages.value)

  const init = {
    method: "PUT",
    body: JSON.stringify(
      (userInfo = {
        username: inputUsername.value,
        password: inputPassword.value,
        statusUpdates: currentStatusData,
        imageURL: avatarIMGS.value,
      })
    ),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await fetch(url, init);
  const userData = await response.json();

  let postParagraph = document.createElement('p');
  postParagraph.innerText = `${inputUsername.value}${inputForMessages.value}`
  postedMessagesContainer?.append(postParagraph)

  displayAllStatusUpdates()
}

//LOG IN
async function logIn() {
  deleteAccBtn.disabled = false;
  const url = `https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/.json`;
  const response = await fetch(url);
  const userData = await response.json();

  if (inputUsername.value in userData && inputPassword.value === userData[inputUsername.value].password) {
    postMessageBtn.disabled = false;
    messagesForUser.innerText = `You've successfully logged in!`
    createUserDiv.style.display = "none";
    loggedInAs.innerHTML = `You are logged in as: ${inputUsername.value} <img src="${avatarIMGS.value}"/>`
    postMessageContainer.style.display = "block";
    getStatusUpdate();
    displayUsers()
    displayAllStatusUpdates()
  } else {
    messagesForUser.innerText = `Wrong username, wrong password or account does not exist.`
  }


}


//GET STATUSUPDATES
async function getStatusUpdate() {
  const url = `https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/${inputUsername.value}/statusUpdates.json`;

  const response = await fetch(url)
  const statusData = await response.json()
  console.log(statusData)

  if (statusData === "") {
    currentStatusData = []
  } else if (typeof statusData === "string") {
    currentStatusData = [statusData]
  } else {
    currentStatusData = statusData;
  }
}


//DISPLAY USERS
async function displayUsers() {
  const userData = await getUsers()

  const getusernamesFromObj = Object.entries(userData);
  getusernamesFromObj.forEach(username => {
    console.log(userData)

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

//DISPLAY ALL MSG
async function displayAllStatusUpdates() {
  const userData = await getUsers();

  statusUpdatesContainer.innerHTML = "";

  for (const username in userData) {
    const statusUpdate = userData[username].statusUpdates;
    const statusUpdateElement = document.createElement('p');
    statusUpdateElement.innerText = `Posts from: ${username}: ${statusUpdate}`
    statusUpdatesContainer?.appendChild(statusUpdateElement)
  }
}

deleteAccBtn.addEventListener('click', (e) => {
  e.preventDefault()
  deleteUserAccount()
  console.log("clicked")
  window.location.reload()
})

async function deleteUserAccount() {
  const url = `https://socialapp-8a221-default-rtdb.europe-west1.firebasedatabase.app/${inputUsername.value}.json`;

  const init = {
    method: "DELETE",
    body: JSON.stringify(
      (userInfo = {
        username: inputUsername.value,
        password: inputPassword.value,
        statusUpdates: currentStatusData,
        imageURL: avatarIMGS.value,
      })
    ),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await fetch(url, init);
  const userAccounts = await response.json();
}

export { createNewUser, createUserBtn, getUsers, postMessages, postMessageBtn, loginBtn, logIn };





