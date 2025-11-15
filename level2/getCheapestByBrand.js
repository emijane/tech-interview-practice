const laptops = [
  { brand: "Dell",     model: "XPS 13",   price: 999 },
  { brand: "HP",       model: "Spectre",  price: 1199 },
  { brand: "Dell",     model: "Inspiron", price: 699 },
  { brand: "Apple",    model: "MacBook Air", price: 999 },
  { brand: "Lenovo",   model: "ThinkPad", price: 849 },
  { brand: "Apple",    model: "MacBook Pro", price: 1999 },
  { brand: "Dell",     model: "Latitude", price: 799 }
];

function getCheapestByBrand(laptops, brand) {
    // start with no cheapest laptop selected yet
    let cheapest = null;
    // convert the input brand to lowercase for case-insensitive comparison
    let b = brand.toLowerCase();

    for (let i = 0; i < laptops.length; i++) {
        // convert this laptops brand to lowercase for comparison
        let brandLower = laptops[i].brand.toLowerCase();
        // check if this laptops brand matches the requested brand
        if (brandLower === b) {
            // if we havent chosen a laptop yet (null)
            // OR this laptops price is lower than the current cheapest
            if (cheapest === null || laptops[i].price < cheapest.price) {
                // update cheapest to this laptop object
                cheapest = laptops[i];
            }
        }
    }
    // return cheapest matching laptop or null if none matched
    return cheapest;
}

console.log(getCheapestByBrand(laptops, "Dell"));