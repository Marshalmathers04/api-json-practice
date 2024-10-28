export let createproduct = (item) => {
    item.forEach(element => {
        let parent = document.createElement("div")
        let container = document.querySelector(".container")
        parent.insertAdjacentHTML("beforeend",`
            <img src="${element.image}"></img>
            <h1>${element.title}</h1>
            <h1>${element.description}</h1>
            <h1>${element.price}</h1>
        `)
        parent.id = element.category
        parent.classList.add("parent")
        container.appendChild(parent)
    });
}