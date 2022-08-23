window.addEventListener('DOMContentLoaded', () => {
    testingapi();
})

function testingapi() {
    const ul = document.getElementById('api-list');

    fetch('https://api.publicapis.org/entries')
    .then(res => res.json())
    .then(data => {
        data.entries.forEach(element => {
            console.log(element);
            let li = document.createElement("li");
            li.innerText = element.API;
            li.id = element.API
            ul.append(li);
        })
    });
};
