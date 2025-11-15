const cars = [
  { brand: "Honda", model: "Civic", price: 22000 },
  { brand: "Toyota", model: "Camry", price: 26000 },
  { brand: "Ford", model: "Mustang", price: 55000 },
  { brand: "Chevrolet", model: "Malibu", price: 24000 }
];

function mapPriceAndModel(cars) {
    // creat empty array to store mapped results
    let mapped = [];

    for (let i = 0; i < cars.length; i++) {
        // get the model and price for current car
        let model = cars[i].model;
        let price = cars[i].price;

        // push a NEW object containing only model and price
        mapped.push({
            model: model,
            price: price
        });
    }

    // return new mapped array
    return mapped;
}

console.log(mapPriceAndModel(cars));