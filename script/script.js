import {createproduct} from "./addproducts.js"
import {api} from "./api.js"
import {removeothers} from "./categoriesplit.js"
import {addtocart} from "./addtocart.js"
fetch(api)
.then(r=>r.json())
.then(data=>{createproduct(data)
removeothers()
addtocart()
})
.catch(error=>alert(error))
