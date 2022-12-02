const style = { "textColor": "magenta", "fontSize": "125%", "backgroundColor": "#ffd1dc" };

document.addEventListener('DOMContentLoaded', () => {
    listAPI();
})

// on click, background of page will turn pink
document.addEventListener('click', () => {
    document.body.style.backgroundColor = style.backgroundColor;
})

// on keypress, will display only APIs that match that letter
document.addEventListener('keydown', (event) => {
    // if key pressed is escape, return to default list
    if (event.key === "Escape") listAPI(null);
    document.getElementById("api-list").innerHTML = "";
    listAPI(event.key);
})

document.addEventListener('mouseover', (e) => {
    changeStyle(e.target.id, style.fontSize, style.textColor)
})
document.addEventListener("mouseout", (e) => {
    changeStyle(e.target.id, "", "")
})

// change styling (font size & color)
function changeStyle(element, fontSize, color) {
    const api = document.getElementById(element);
    if (!api || api.id === "api-list") return;
    api.style.fontSize = fontSize;
    api.style.color = color;
}

function listAPI(input) {
    // grabs the ul from index.html that the lis will be added to
    const ul = document.getElementById('api-list');

    // fetches all entries from the api
    fetch('https://api.publicapis.org/entries')
    .then(res => res.json())
    .then(data => {
        data.entries.forEach(element => {
            // filters only for elements with no auth key
            if (!element.Auth) {
                // outputs both lowercase and uppercase for the keydown event
                if (input == null || element.API.charAt(0).toUpperCase() == input.toUpperCase()) {
                    const li = document.createElement("li");
                    // filters the original api object to just the name of the api, the description, and a link
                    const filtered = ["API", "Description", "Link"].reduce((result, key) => { result[key] = element[key]; return result; }, {});
                    // loops to add info so html can display
                    let info = "";
                    for (let x in filtered) {
                        info += filtered[x] + "<br>";
                    };
                    li.innerHTML = info;

                    // adds the name of the API as the id to each element
                    // if the id already exists, adds 1 to the end of it
                    if (document.getElementById(element.API)) {
                        li.id = element.API + 1;
                    } else {
                        li.id = element.API;
                    };

                    // appends the filtered object to the ul
                    ul.append(li);
                }
            }
        })
    });
};
