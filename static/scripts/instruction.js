// define variables
const cardTitle = document.getElementById("cardTitle");
const cardSubtitle = document.getElementById("cardSubtitle");
const cardButtons = document.getElementById("cardButtons");
const cardBody = document.getElementById("cardBody");

// set document title
document.title = "document title";

// set card title
cardTitle.innerHTML = "page title";

// set card subtitle
cardSubtitle.innerHTML = "page subtitle"

// add card button
let newButton = document.createElement("a");
newButton.classList.add("cardButton");
newButton.draggable = false
newButton.href = "/start?template=clarification&lang=de-DE";
newButton.innerHTML = `<i class="bi bi-info"></i> start`
cardButtons.appendChild(newButton);

// set card body
cardBody.innerHTML = "card body"