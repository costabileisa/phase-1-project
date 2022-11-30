window.addEventListener('DOMContentLoaded', () => {
    testingapi();
})

window.addEventListener('click', () => {
    document.body.style.backgroundColor = "#ffd1dc"
})

window.addEventListener('keydown', (event) => {
    document.getElementById("api-list").innerHTML = "";
    testingapi(event.key);
})

function testingapi(input) {
    const ul = document.getElementById('api-list');

    fetch('https://api.publicapis.org/entries')
    .then(res => res.json())
    .then(data => {
        data.entries.forEach(element => {
            if (!element.Auth) {
                if (input == null || element.API.charAt(0).toUpperCase() == input.toUpperCase()) {
                    console.log(element)
                    let li = document.createElement("li");
                    li.innerText = element.API;
                    li.id = element.API;
                    ul.append(li);
                }
            }
        })
    });
};
