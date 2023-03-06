// define variables
const cardTitle = document.getElementById("cardTitle");
const cardSubtitle = document.getElementById("cardSubtitle");
const cardButtons = document.getElementById("cardButtons");
const cardBody = document.getElementById("cardBody");
const xmlHttp = new XMLHttpRequest();
const path = location.pathname.split('/');
const sources = document.getElementsByTagName("sourcelink");

const urlParams = new URLSearchParams(window.location.search);

// check url
if (!urlParams.get("lang")){
    let url = new URL(window.location);
    url.searchParams.set("lang", "de-DE");
    window.location = url
}

// get data
xmlHttp.open("GET", `/api/site/${path[1]}`);
xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
        let data = JSON.parse(xmlHttp.responseText);
        
        if (urlParams.get("template") !== data.template || !urlParams.get("template")){
            let url = new URL(window.location);
            url.searchParams.set("template", data.template);
            window.location = url
        }

        // set document title
        document.title = data.title;

        // set card title
        cardTitle.innerHTML = data.title;

        // set card subtitle
        cardSubtitle.innerHTML = data.subtitle;

        // add card button
        for (const obj of data.links) {
            let newButton = document.createElement("a");
            newButton.classList.add("cardButton");
            newButton.draggable = false
            newButton.href = obj.target;
            newButton.innerHTML = obj.text;
            cardButtons.appendChild(newButton);
        }

        // set card body
        cardBody.innerHTML = data.content
        
        for (var i = 0; i < sources.length; i++) {
            let sourceLink = sources[i].textContent;
            sources[i].innerHTML = `<a href="${sourceLink}" class="sourcelinkHref"><sup>[${i+1}]</sup></a>`;
        }
    }if (xmlHttp.readyState >= 4 && xmlHttp.status != 200){
        window.location.replace("/start?template=instruction&lang=de-DE");
    }
};
xmlHttp.send();