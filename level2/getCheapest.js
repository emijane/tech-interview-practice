const phones = [
  { brand: "Apple",  model: "iPhone 13", price: 799 },
  { brand: "Samsung", model: "Galaxy S22", price: 999 },
  { brand: "Google",  model: "Pixel 7", price: 599 },
  { brand: "OnePlus", model: "OnePlus 10", price: 699 },
  { brand: "Motorola", model: "Edge", price: 499 },
  { brand: "Nokia",    model: "X100", price: 349 }
];

// pass in phones since we are only looking for the price
function getCheapestPhone(phones) {
    // stores a reference to the first existing object in phones array
    let cheapest = phones[0];

    // start at index 1 since we already have index 0 stored in cheapest
    for (let i = 1; i < phones.length; i++) {
        // if the price of the current index of phone is less than current cheapest
        if (phones[i].price < cheapest.price) {
            // update cheapest to be the current index of phones[i]
            cheapest = phones[i];
        }
    }

    return cheapest;
}

console.log(getCheapestPhone(phones));