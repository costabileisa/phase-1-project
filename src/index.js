document.addEventListener('DOMContentLoaded', () => {
    listAPI();
    search();
    changeColor();
    hoverStyle();
    // addComment()
})

// function addComment() {
//     const form = document.getElementById("comment-form");

//     // creates a div for the comments
//     let commentsDiv = document.createElement("div");
//     commentsDiv.id = "comments-div"

//     form.append(commentsDiv)

//     // creates a new h2 header for comments
//     let commentsHeader = document.createElement("h2")
//     commentsHeader.id = "comments";
//     commentsHeader.innerHTML = "Comments"
    
//     commentsDiv.append(commentsHeader)

//     // creates a new ul for the comments to be added to
//     let ul = document.createElement("ul")
//     ul.id = "comments-list"
//     ul.style.listStyleType = "none";

//     commentsDiv.append(ul)

//     // listen for form submit
//     form.addEventListener("submit", event => {
//         event.preventDefault()
//         // get the comment value
//         let comment = document.getElementById("comment")
        
//         // create new p and add the comment
//         let li = document.createElement("li");
//         li.innerHTML = (comment.value)        
//         // append the comment to the comments section
//         ul.append(li)

//         comment.value = "";
//         comment.innerHTML = comment.value;
//     })
// }

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
                if (input == null || input === "" || element.API.toLowerCase().startsWith(input.toLowerCase()) === true) {
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
    })
}

function search() {
    const form = document.getElementById("search-box")
    form.addEventListener("keyup", event => {
        const searchContent = document.getElementById("search").value

        document.getElementById("api-list").innerHTML = "";

        if (event.key === "Escape") return listAPI(null);

        listAPI(searchContent)
    })
}

function changeColor() {
    // on click, background of page will turn pink
    document.addEventListener('click', () => {
        document.body.classList.add("changeColor");
    })
}

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

function hoverStyle() {
    document.addEventListener('mouseover', (e) => style(e, "add"))
    document.addEventListener("mouseout", (e) => style(e, "remove"))
}
