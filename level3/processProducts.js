const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Laptop", category: "Electronics", price: 1200 }, // duplicate by name
  { id: 4, name: "T-Shirt", category: "Clothing", price: 25 },
  { id: 5, name: "Jeans", category: "Clothing", price: 50 },
  { id: 6, name: "T-Shirt", category: "Clothing", price: 25 } // duplicate by name
];

// build a function that:
// filters products with price above 30
// removes duplicate products based on name field
// transforms each remaining product into an object

function processProducts(products) {
    let grouped = {};
    let deduped = [];

    for (let i = 0; i < products.length; i++) {
        let name = products[i].name;
        let price = products[i].price;
        let category = products[i].category;

        // if price > 30
        // and deduped does not already include the name
        if (price > 30 && !deduped.includes(name)) {
            // push the name into deduped array so we dont have duplicates
            deduped.push(name);

            // if grouped does not already have a key for this category
            if(!grouped[category]) {
                // create an empty array for that category
                grouped[category] = [];
            }

            // push the transformed { name, price } object into the category array
            grouped[category].push({
                name: name,
                price: price
            })

        }
    }
    let sorted = [...grouped];
    return sorted;
}

console.log(processProducts(products));