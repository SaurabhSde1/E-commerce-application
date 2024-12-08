import { createCartCards } from "./cartcard.js";
import { products } from "./product.js";
import {cartinfo} from "./cartinfo.js";
let cardDetails = document.querySelector("#card-details"); 
let cartAddedData = JSON.parse(localStorage.getItem("cart")) || [];
let Itemcount = document.querySelector("#Itemcount");
let totalprice = document.querySelector("#totalprice");
cartinfo(cartAddedData,cardDetails);
let discount = document.querySelector("#discount");
let Total = document.querySelector("#Total");
let save = document.querySelector("#save");

cardDetails.addEventListener("click",(event)=>{
    if(event.target.innerText === "Remove") {
        let productId = parseInt(event.target.dataset.id);
        cartAddedData = cartAddedData.filter(product => product._id !== productId);
        localStorage.setItem("cart", JSON.stringify(cartAddedData));
        // Clear existing cards before adding the updated ones
        while (cardDetails.firstChild) {
            cardDetails.removeChild(cardDetails.firstChild);
        }
        cartinfo(cartAddedData, cardDetails);
    } else if(event.target.innerText === "Save to Wishlist"){
        window.location.href = "./wishlist.html";
    }
});

let count = cartAddedData.length;
Itemcount.innerHTML = count;

let newPrice = cartAddedData.reduce((acc,curr)=>acc+curr.newPrice,0);

let oldPrice = cartAddedData.reduce((acc,curr)=>acc+curr.oldPrice,0);
totalprice.innerHTML = oldPrice;

discount.innerHTML = "Rs. " + (oldPrice - newPrice);

Total.innerHTML = newPrice + 100;

save.innerHTML = oldPrice - newPrice;

