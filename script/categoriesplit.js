let menu = document.querySelectorAll("li")
export function removeothers() {
    let parents = document.querySelectorAll(".parent")
    menu.forEach(e => {
        e.addEventListener("click", () => {
            let selectedCategory = e.textContent.toLowerCase();
            parents.forEach(parent => {
                if (selectedCategory==="all"){
                    parents.forEach(e=>{
                        e.style.display = "block"
                    })
                }
                if (parent.id === selectedCategory) {
                    parent.style.display = "block"; 
                }
                else {
                    parent.style.display = "none"; 
                }
            });
        });
    });
}