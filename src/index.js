window.addEventListener('DOMContentLoaded', () => {
    listAPI();
})

// on click, background of page will turn pink
window.addEventListener('click', () => {
    document.body.style.backgroundColor = "#ffd1dc"
})

// on keypress, will display only APIs that match that letter
window.addEventListener('keydown', (event) => {
    document.getElementById("api-list").innerHTML = "";
    listAPI(event.key);
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
                    console.log(element)
                    let li = document.createElement("li");
                    // filters the original api object to just the name of the api, the description, and a link
                    const filtered = ["API", "Description", "Link"].reduce((result, key) => { result[key] = element[key]; return result; }, {});
                    console.log(filtered)
                    // loops to add info so html can display
                    let info = "";
                    for (let x in filtered) {
                        info += filtered[x] + "<br>";
                    };
                    li.innerHTML = info;

                    // adds the name of the API as the id to each element
                    li.id = element.API;

                    // appends the filtered object to the ul
                    ul.append(li);
                }
            }
        })
    });
};
