// array of cars with model and price
// we want to sort by price
const cars = [
  { model: "Civic",       price: 22000 },
  { model: "Corvette",    price: 70000 },
  { model: "Camry",       price: 26000 },
  { model: "Mustang",     price: 55000 },
  { model: "Accord",      price: 28000 },
  { model: "Challenger",  price: 32000 }
];

// function that takes in the cars array, and the selected order (asc, desc)
function sortCarsByPrice(cars, order) {
    // create a new array called sorted so we don't manipulate the original array
    sorted = [...cars];

    // if order === asc
    if (order === "asc") {
        // sort the duplicated array using the sort function
        // if the price of a - b is negative, sort asc
        sorted.sort((a,b) => a.price - b.price);
    // if order === desc
    } else if (order === "desc") {
        // if the price of b - a is positive, sort desc
        sorted.sort((a,b) => b.price - a.price);
    }

    return sorted;
}

console.log(sortCarsByPrice(cars, "asc"));