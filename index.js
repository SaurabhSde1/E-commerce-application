import { products } from "./product.js";
import {createProductCards} from "./productcard.js"
let cardsContainer = document.querySelector("#cardsContainer");
let cartContainer = [];
let search = document.querySelector("#search-box");
createProductCards(products,cardsContainer);




// Adding and checking cart items
const checkincart = (cartContainer,productId) => {
   return cartContainer.some((item)=>item._id === productId);
}
cardsContainer.addEventListener("click",(event)=>{
   const itemid = parseInt(event.target.dataset.id);
   const alreadyincart = checkincart(cartContainer,itemid);
   if(!alreadyincart){
      let item = products.filter(({_id})=>_id === itemid);
      cartContainer = [...cartContainer,...item];
      localStorage.setItem("cart",JSON.stringify(cartContainer));
      console.log(cartContainer);
      let button = event.target;
      button.innerHTML = `Go To Cart 💌`;
   }
   else{
      location.href = "./cart.html";
   }
})

