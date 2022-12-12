document.addEventListener('DOMContentLoaded', () => {
    listAPI();
})

// on click, background of page will turn pink
document.addEventListener('click', () => {
    document.body.classList.add("changeColor");
})

// on keypress, will display only APIs that match that letter
document.addEventListener('keydown', (event) => {
    // reset the list
    document.getElementById("api-list").innerHTML = "";
    // if key pressed is escape, return to default list
    if (event.key === "Escape") return listAPI(null);
    
    listAPI(event.key);
})

document.addEventListener('mouseover', (e) => style(e, "add"))
document.addEventListener("mouseout", (e) => style(e, "remove"))

function style(event, style) {
    const className = event.target.className.split(" ")[0]
    if (!className) return;
    if (event.target.nodeName !== "LI" && event.target.nodeName !== "A") return;

    const collection = document.getElementsByClassName(className)

    for (let i = 0; i < collection.length; i++) {
        const element = collection.item(i)
        if (style === "remove") {
            element.classList.remove("styled")
        }
        if (style === "add") {
            element.classList.add("styled")
        }
    }

}

async function listAPI(input) {
    // grabs the ul from index.html that the lis will be added to
    const apiList = document.getElementById('api-list');

    // fetches all entries from the api
    await fetch("https://api.publicapis.org/entries")
    .then(res => res.json())
    .then(data => {
        data.entries.forEach(element => {
            // filters only for elements with no auth key
            if (!element.Auth) {
                // outputs both lowercase and uppercase for the keydown event
                if (input == null || element.API.charAt(0).toUpperCase() == input.toUpperCase()) {
                    const className = element.Description.split(" ").join("-")
                    let ul = document.createElement("ul")

                    let apiName = document.createElement("li")
                    apiName.innerHTML = element.API
                    apiName.className = className

                    let apiDescription = document.createElement("li")
                    apiDescription.innerHTML = element.Description
                    apiDescription.className = className

                    let apiLink = document.createElement("li")
                    let link = document.createElement("a")
                    link.href = element.Link
                    link.innerHTML = element.Link
                    link.className = className
                    apiLink.className = className
                    apiLink.append(link)

                    ul.append(apiDescription, apiLink)
                    apiName.append(ul)

                    // appends the name to the apiList
                    apiList.append(apiName)
                }
            }
        })
    });
};