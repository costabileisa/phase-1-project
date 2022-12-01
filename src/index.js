document.addEventListener('DOMContentLoaded', () => {
    listAPI();
})

// on click, background of page will turn pink
document.addEventListener('click', () => {
    document.body.style.backgroundColor = "#ffd1dc"
})

// on keypress, will display only APIs that match that letter
document.addEventListener('keydown', (event) => {
    // if key pressed is escape, return to default list
    if (event.key === "Escape") listAPI(null);
    //console.log(event.key)
    document.getElementById("api-list").innerHTML = "";
    listAPI(event.key);
})

// increases font size when mouseover
document.addEventListener('mouseover', (e) => {
    let api = document.getElementById(e.target.id);
    if (!api) return;
    api.style.fontSize = "125%";
    api.style.color = "magenta";
})
// reverts the size back to normal when mouse leaves
document.addEventListener("mouseout", (e) => {
    let api = document.getElementById(e.target.id);
    if (!api) return;
    api.style.fontSize = "";
    api.style.color = "";
})


// lists the APIs
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
                    //console.log(element)
                    let li = document.createElement("li");
                    // filters the original api object to just the name of the api, the description, and a link
                    const filtered = ["API", "Description", "Link"].reduce((result, key) => { result[key] = element[key]; return result; }, {});
                    //console.log(filtered)
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
