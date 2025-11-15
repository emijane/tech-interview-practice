const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Laptop", price: 1200 },   // duplicate
  { name: "Keyboard", price: 100 },
  { name: "Phone", price: 800 },     // duplicate
  { name: "Mouse", price: 40 },
  { name: "Headphones", price: 30 }
];

function filterDedupe(products) {
    let dedupe = [];
    let mapped = [];

    for (let i = 0; i < products.length; i++) {
        let name = products[i].name;
        let price = products[i].price;

        if ( price >= 50 && !dedupe.includes(name)) {
            dedupe.push(name);

            mapped.push({
                name: name,
                price: price
            })
        }
    }

    return mapped;
}

console.log(filterDedupe(products));