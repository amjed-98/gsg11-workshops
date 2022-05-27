let temp_all_products = JSON.parse(localStorage.getItem("products")) || [];
let all_products = [...temp_all_products];

let product_name = document.getElementById("product-name");
let product_details = document.getElementById("product-details");
let product_image = document.getElementById("product-image");
let product_price = document.getElementById("product-price");
let product_category = document.getElementById("product-category");
let product_submit = document.getElementById("product-submit-edit");
let product_name2 = window.location.search.substr(1).split("=")[1];
product_submit.addEventListener("click", (e) => {
    let temp_all_products = JSON.parse(localStorage.getItem("products")) || [];
    let all_products = [...temp_all_products];
    // console.log('dfff');
    e.preventDefault;
    let product = {
        name: product_name.value,
        details: product_details.value,
        image: product_image.value,
        price: product_price.value,
        category: product_category.value,
    };
    all_products.forEach((element) => {
        console.log(product_name2, element.name);
        if (element.name == product_name2) {
            element.name = product.name;
            element.details = product.details;
            element.image = product.image;
            element.price = product.price;
            element.category = product.category;
        }
    });

    localStorage.setItem("products", JSON.stringify(all_products));
});
// localStorage.setItem("products", JSON.stringify(findProduct(product_name2, all_products, product)));

// const findProduct = (name, array, product) => {
//     array.forEach(element => {
//         if (element.name == name) {
//             element = { ...product };
//         }
//     });
//     return array;
// }
// let product_name2 = window.location.search.substr(1).split("=")[1];
