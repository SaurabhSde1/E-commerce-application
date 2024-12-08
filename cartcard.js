export function createCartCards(products, container) {
    for (let product of products) {
        // card container 
        let card = document.createElement("div");
        card.classList.add("card", "card-vertical", "d-flex", "direction-column", "relative", "shadow");

        // image container
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("card-image-container");
        let img = document.createElement("img");
        img.classList.add("card-image");
        img.setAttribute("src", product.img);
        img.setAttribute("alt", product.alt);
        imageContainer.appendChild(img);
        card.appendChild(imageContainer);

        // card details
        let cardDetails = document.createElement("div");
        cardDetails.classList.add("card-details");
        let cardTitle = document.createElement("div");
        cardTitle.classList.add("card-title");
        cardTitle.innerHTML = product.brand;
        cardDetails.appendChild(cardTitle);

        // card Description
        let cardDescription = document.createElement("div");
        cardDescription.classList.add("card-description");

        let p = document.createElement("p");
        p.classList.add("card-des");
        p.innerHTML = product.name;
        cardDescription.appendChild(p);

        let rating = document.createElement("p");
        rating.innerHTML = product.rating + "⭐";
        cardDescription.appendChild(rating);

        let p1 = document.createElement("p");
        p1.classList.add("card-price");
        p1.innerHTML = `Rs. ${product.newPrice}`;

        let span1 = document.createElement("span");
        span1.classList.add("price-strike-through");
        span1.innerHTML = `Rs. ${product.oldPrice}`;
        p1.appendChild(span1);

        let span2 = document.createElement("span");
        span2.classList.add("discount");
        span2.innerHTML = product.discount + "%";
        p1.appendChild(span2);

        cardDescription.appendChild(p1);
        cardDetails.appendChild(cardDescription);

        // buttons
        let btnhead = document.createElement("div");
        btnhead.classList.add("cta-btn");
        let btn = document.createElement("button");
        btn.classList.add("button", "btn-primary", "btn-icon", "cart-btn", "d-flex", "align-center", "justify-center", "gap", "cursor", "btn-margin");
        btn.setAttribute("data-id", product._id);
        btn.appendChild(document.createTextNode("Remove"));
        btnhead.appendChild(btn);

        cardDetails.appendChild(btnhead);
        card.appendChild(cardDetails);

        // Finally appending all to the card
        container.appendChild(card);
    }
}
