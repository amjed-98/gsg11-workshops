const {
    AddToProductsArray,
    deleteElement,
    searchProduct,
    addToCart,
} = require("./scripts/logic.js");

const dummyCart = [
    { id: 1, name: "apple", price: 2, category: "men" },
    { id: 2, name: "orange", price: 3, category: "women" },
];

const product = { id: 7, name: "gold", price: 9, category: "women" };

test("check if element add to arr", () => {
    let exp = ["sfsfdz"];
    let act = AddToProductsArray("sfsfdz", []);
    expect(exp).toEqual(act);
});
test("check if element deleted from array", () => {
    let exp = [{ name: "item1" }];
    let act = deleteElement("item2", [{ name: "item1" }, { name: "item2" }]);
    expect(exp).toEqual(act);
});

test("should add product to cart", () => {
    addToCart(dummyCart, product);
    expect(dummyCart.includes(product)).toBeFalsy();
});

// test for search function
describe("search for product by name", () => {
    test("should search for product by name", () => {
        const expected = [dummyCart[0]];
        const actual = searchProduct(dummyCart[0].name, dummyCart);
        expect(actual).toEqual(expected);
    });
});
