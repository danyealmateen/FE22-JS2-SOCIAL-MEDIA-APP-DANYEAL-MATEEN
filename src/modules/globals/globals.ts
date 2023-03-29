const createUserBtn = document.getElementById("createUserBtn") as HTMLButtonElement;
const inputUsername = document.getElementById("inputUsername") as HTMLInputElement;
const inputPassword = document.getElementById("inputPassword") as HTMLInputElement;
const displayUsernames = document.getElementById('displayUsernames') as HTMLElement;
const inputForMessages = document.getElementById('inputForMessages') as HTMLInputElement;
const postMessageBtn = document.getElementById('postMessageBtn') as HTMLButtonElement;
const messagesForUser = document.getElementById('messagesForUser') as HTMLElement;
const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement;
const postedMessagesContainer = document.getElementById('postedMessagesContainer') as HTMLElement
const avatarIMGS = document.getElementById('avatarIMGS') as HTMLSelectElement
const createUserDiv = document.getElementById('createUserDiv') as HTMLElement
const postMessageContainer = document.getElementById('postMessageContainer') as HTMLElement
const loggedInAs = document.getElementById('loggedInAs') as HTMLElement;
const connectionErrorMsg = document.getElementById('connectionErrorMsg') as HTMLElement;
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

export { currentStatusData, createUserBtn, postMessageBtn, loginBtn, deleteAccBtn, userInfo, inputUsername, inputPassword, inputForMessages, avatarIMGS, messagesForUser, postedMessagesContainer, profileInfoContainer, displayUsernames, statusUpdatesContainer, createUserDiv, loggedInAs, postMessageContainer, connectionErrorMsg };





