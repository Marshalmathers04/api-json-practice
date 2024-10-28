let reddot = document.querySelector(".red-dot");
let cartinside = [];

export function addtocart() {
    let products = document.querySelectorAll(".parent");
    let i = 0
    products.forEach(e => {
        e.addEventListener("click", () => {
            const boughtItems = document.createElement("h1")
            e.appendChild(boughtItems)
            if (cartinside.includes(e)) {
                i++
                boughtItems.innerHTML = i
                
                cartinside.push(e)
            } else {
                const boughtItems = document.createElement("h1")
                i++
                boughtItems.innerHTML = i
                cartinside.push(e);
            }


            const cartempty = cartinside.length === 0;
            reddot.style.display = cartempty ? "none" : "block"; 
        });
    });
}
