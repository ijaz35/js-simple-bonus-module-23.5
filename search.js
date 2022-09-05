//Find the matching product by searching products
const products = [
    { name: "dell laptop", price: 35000 },
    { name: "asus laptop", price: 55000 },
    { name: "lenovo laptop", price: 45000 },
    { name: "apple watch", price: 12000 },
    { name: "samsung watch", price: 7000 },
    { name: "iphone phone", price: 70000 },
    { name: "samsung phone", price: 15000 },
    { name: "one plus phone", price: 27000 },
    { name: "sound box", price: 2000 }
];
function searchProducts(products, searchWord) {
    let requiredArray = [];
    for (const product of products) {
        if (product.name.includes(searchWord)) {
            requiredArray.push(product);
        }

    }
    return requiredArray;
}
console.log(searchProducts(products, 'phone'));