import { createChatBoard } from "./chats";


let welcomePageContainer = document.getElementById("welcome-page")
let chatBox = document.getElementById("chat-page")

function createDashBoard() {
welcomePageContainer.innerHTML = `
<h1>GIGGLE KITTY DASHBOARD</h1>
`
chatBox.innerHTML = createChatBoard()
}






export {createDashBoard}