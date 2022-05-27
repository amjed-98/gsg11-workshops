let temp_allProducts = JSON.parse(localStorage.getItem("products")) || [];
let allProducts = [...temp_allProducts];

const renderProducsInIndexPage = (card_container, array_of_product) => {
    card_container.innerHTML = "";
    array_of_product.forEach((element) => {
        card_container.innerHTML += `
    <div class="card">
        <img src="${element.image}" class="card-image" />
        <div class="card-body">
            <h3 class="card-title">${element.name}</h3>
            <p class="card-description">${element.details}</p>
            <p class="card-price">$${element.price}</p>
            <button class="buy" id=${element.name}>Add to Cart</button>
        </div>
    </div>
    `;
    });
};

const card_container = document.getElementById("cards-container");

renderProducsInIndexPage(card_container, allProducts);
