
export function cartinfo(products, cartAddedData) {
    for (let product of products) {
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("card-horizontal", "d-flex", "shadow");

        // Adding Image
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("card-hori-image-container", "relative");
        let image = document.createElement("img");
        image.classList.add("card-image");
        image.setAttribute("src", product.img);
        image.setAttribute("alt", product.alt);
        imageContainer.appendChild(image);
        cardContainer.appendChild(imageContainer);

        // Adding Card Details and price
        let cardDetails = document.createElement("div");
        cardDetails.classList.add("card-details", "d-flex", "direction-column");
        let cardtitle = document.createElement("div");
        cardtitle.classList.add("card-title");
        cardtitle.innerHTML = product.brand;
        cardDetails.appendChild(cardtitle);

        let cardDescription = document.createElement("div");
        cardDescription.classList.add("card-description");
        let p1 = document.createElement("p");
        p1.classList.add("card-des");
        p1.innerHTML = product.name;
        cardDescription.appendChild(p1);
        let p2 = document.createElement("p");
        p2.classList.add("card-price");
        p2.innerHTML = product.newPrice;
        let span1 = document.createElement("span");
        span1.classList.add("price-strike-through", "padding-all-8");
        span1.innerHTML = product.oldPrice;
        p2.appendChild(span1);
        let span2 = document.createElement("span");
        span2.classList.add("discount", "padding-all-8");
        span2.innerHTML = product.discount + "%";
        p2.appendChild(span2);
        cardDescription.appendChild(p2);
        cardDetails.appendChild(cardDescription);

        // Quantity Container
        let quantityContainer = document.createElement("div");
        quantityContainer.classList.add("quantity-container", "d-flex", "gap");
        let p3 = document.createElement("p");
        p3.classList.add("q-title");
        p3.innerHTML = "Quantity:";
        quantityContainer.appendChild(p3);
        let countContainer = document.createElement("div");
        countContainer.classList.add("count-container", "d-flex", "align-center", "gap");
        let buttonMinus = document.createElement("button");
        buttonMinus.classList.add("count");
        buttonMinus.innerHTML = "-";
        let span3 = document.createElement("span");
        span3.classList.add("count-value");
        span3.innerHTML = "1";
        let buttonPlus = document.createElement("button");
        buttonPlus.classList.add("count");
        buttonPlus.innerHTML = "+";
        countContainer.appendChild(buttonMinus);
        countContainer.appendChild(span3);
        countContainer.appendChild(buttonPlus);
        quantityContainer.appendChild(countContainer);

        // Button 1
        let btnconatiner1 = document.createElement("div");
        btnconatiner1.classList.add("cta-btn1", "d-flex", "gap");
        let btn1 = document.createElement("button");
        btn1.classList.add("button", "hori-btn", "btn-primary", "btn-icon", "d-flex", "align-center", "justify-content", "gap", "cursor", "btn-margin");
        btn1.innerHTML = "Remove";
        btn1.setAttribute("data-id", product._id);
        btnconatiner1.appendChild(btn1);
        quantityContainer.appendChild(btnconatiner1);

        // Button 2
        let btnconatiner2 = document.createElement("div");
        btnconatiner2.classList.add("cta-btn2", "d-flex", "gap");
        let btn2 = document.createElement("button");
        btn2.classList.add("button", "hori-btn", "btn-primary", "btn-icon", "d-flex", "align-center", "justify-content", "gap", "cursor", "btn-margin");
        btn2.innerHTML = "Save to Wishlist";
        btn2.setAttribute("data-id", product._id);
        btnconatiner2.appendChild(btn2);
        quantityContainer.appendChild(btnconatiner2);

        cardDetails.appendChild(quantityContainer);
        cardContainer.appendChild(cardDetails);
        cartAddedData.appendChild(cardContainer);
    }
}
