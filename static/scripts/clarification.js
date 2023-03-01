// define variables
const cardTitle = document.getElementById("cardTitle");
const cardSubtitle = document.getElementById("cardSubtitle");
const cardButtons = document.getElementById("cardButtons");
const cardBody = document.getElementById("cardBody");
const cardImage = document.getElementById("cardImage");
const bigImage = document.getElementById("bigImage");
const bigPictureOriginalButton = document.getElementById("bigPictureOriginalButton");
const bigPictureConfirmButton = document.getElementById("bigPictureConfirmButton");

// set document title
document.title = "document title";

// set card title
cardTitle.innerHTML = "page title";

// set card subtitle
cardSubtitle.innerText = "page subtitle"

// add card button
let newButton = document.createElement("a");
newButton.classList.add("cardButton");
newButton.draggable = false
newButton.href = "/start?template=clarification&lang=de-DE";
newButton.innerHTML = `<i class="bi bi-info"></i> start`;
cardButtons.appendChild(newButton);

// set card body
cardBody.innerHTML = "card body <highlight>highlight</highlight> <a href='/hallo'>link</a>";

// set images
cardImage.src = "https://schlaganfallbegleitung.de/wp-content/uploads/2020/11/stabile-seitenlage-johanniter-1.png"
bigImage.src = "https://schlaganfallbegleitung.de/wp-content/uploads/2020/11/stabile-seitenlage-johanniter-1.png"
bigPictureOriginalButton.href = "https://schlaganfallbegleitung.de/wp-content/uploads/2020/11/stabile-seitenlage-johanniter-1.png"

// set big picture button text
bigPictureOriginalButton.innerHTML = `Original <i class="bi bi-box-arrow-up-right"></i>`
bigPictureConfirmButton.innerHTML = `Confirm`