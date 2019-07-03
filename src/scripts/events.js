
// Define variable to target html container for tasks
let eventPageContainer = document.querySelector("#event-page")


// Declare a function that lays out the html format of the main task page
function createEvent() {
    let addEventBtn = document.createElement("button")
    addTaskBtn.setAttribute("id", "event-btn" )
    addEventBtn.textContent ="Add Event"
    taskPageContainer.appendChild(h1TaskPage)
    taskPageContainer.appendChild(addTaskBtn)
}

function createNewEventForm() {
  return `
    <fieldset id="newEvent">
        <label for="event-name"><h4>Name: </h4></label>
        <input id="event-name" type="text" name="event-name" required>
        <label for="event-date"><h4>Date: </h4></label>
        <input id="event-date" type="text" name="event-date" required>
        <label for="event-time"><h4>Time: </h4></label>
        <input id="event-time type="text" name="event-time" required>
        <label for="event-location"><h4>Location: </h4></label>
        <input id="event-location" type="text" name="event-location" required>
        <button class="save_events">Save Event</button>
    </fieldset>
    `;
}
createNewEvent();

function addEventListener() {
  let newEvents = document.querySelector("#newEvent");
  document.querySelector(".save_events").addEventListener("click", () => {
    let eventName = document.querySelector("#event-name").value;
    let eventDate = document.querySelector("#event-date").value;
    let eventTime = document.querySelector("#event-time").value;
    let eventLocation = document.querySelector("#event-location").value;
  });
}

// function createArticlesSection(user) {
//     welcomePageContainer.innerHTML =
//     `
//     <h2>Articles</h2>

//     `
//     let dataKeyUserName = sessionStorage.getItem("name")
//     let dataKeyEmail = sessionStorage.getItem("email")
//     console.log(dataKeyUserName)
//     console.log(dataKeyEmail)

export { createNewEvent };