const sales = [
  { product: "Laptop",   category: "Electronics", amount: 1200 },
  { product: "Laptop",   category: "Electronics", amount: 1200 }, // duplicate
  { product: "Phone",    category: "Electronics", amount: 800 },
  { product: "Keyboard", category: "Electronics", amount: 100 },
  { product: "Jeans",    category: "Clothing", amount: 50 },
  { product: "Jeans",    category: "Clothing", amount: 50 }, // duplicate
  { product: "Jacket",   category: "Clothing", amount: 120 },
  { product: "Hat",      category: "Clothing", amount: 25 }
];

function ProductSalesProcessor(sales) {
    let grouped = {};
    let deduped = [];

    for (let i = 0; i < sales.length; i++) {
        let product = sales[i].product;
        let category = sales[i].category;
        let amount = sales[i].amount;

        if (amount >= 50 && !deduped.includes(product)) {
            deduped.push(product);

            if(!grouped[category]) {
                grouped[category] = [];
            }

            grouped[category].push({
                product: product,
                amount: amount
            });

            // takes two objects (a,b)
            // compare their amount values
            // is b.amount is greater, put b BEFORE a
            grouped[category].sort((a,b) => b.amount - a.amount);

        }
    }
    return grouped;
}

console.log(ProductSalesProcessor(sales));