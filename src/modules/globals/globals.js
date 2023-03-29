const createUserBtn = document.getElementById("createUserBtn");
const inputUsername = document.getElementById("inputUsername");
const inputPassword = document.getElementById("inputPassword");
const displayUsernames = document.getElementById('displayUsernames');
const inputForMessages = document.getElementById('inputForMessages');
const postMessageBtn = document.getElementById('postMessageBtn');
const messagesForUser = document.getElementById('messagesForUser');
const loginBtn = document.getElementById('loginBtn');
const postedMessagesContainer = document.getElementById('postedMessagesContainer');
const avatarIMGS = document.getElementById('avatarIMGS');
const createUserDiv = document.getElementById('createUserDiv');
const postMessageContainer = document.getElementById('postMessageContainer');
const loggedInAs = document.getElementById('loggedInAs');
const connectionErrorMsg = document.getElementById('connectionErrorMsg');
let statusUpdatesContainer = document.getElementById('statusUpdatesContainer');
let profileInfoContainer = document.getElementById('profileInfoContainer');
const deleteAccBtn = document.getElementById('deleteAccBtn');
let currentStatusData;
let userInfo = {
    username: inputUsername.value,
    password: inputPassword.value,
    statusUpdates: [inputForMessages.value],
    imageURL: avatarIMGS.value,
};
export { currentStatusData, createUserBtn, postMessageBtn, loginBtn, deleteAccBtn, userInfo, inputUsername, inputPassword, inputForMessages, avatarIMGS, messagesForUser, postedMessagesContainer, profileInfoContainer, displayUsernames, statusUpdatesContainer, createUserDiv, loggedInAs, postMessageContainer, connectionErrorMsg };
