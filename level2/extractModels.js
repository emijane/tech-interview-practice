const phones = [
  { brand: "Apple", model: "iPhone 13", price: 799 },
  { brand: "Samsung", model: "Galaxy S22", price: 999 },
  { brand: "Google", model: "Pixel 7", price: 599 },
  { brand: "OnePlus", model: "OnePlus 10", price: 699 }
];

function modelNames(phones) {
    // create an empty array to store mapped values
    let models = [];

    for (let i = 0; i < phones.length; i++) {
        // extract current model key
        let model = phones[i].model

        // push each model name into new array
        models.push(model);
    }
    return models;
}

console.log(modelNames(phones));