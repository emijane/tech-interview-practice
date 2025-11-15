const boats = [
  { id: 1, type: "sailboat", price: 50000 },
  { id: 2, type: "yacht",     price: 900000 },
  { id: 3, type: "sailboat", price: 65000 },
  { id: 4, type: "fishing",  price: 25000 }
];

function filterBoats(boats, type) {
    let typeArr = [];

    for (let i = 0; i < boats.length; i++) {
        if ( boats[i].type === type ) {
            typeArr.push(boats[i]);
        }
    }
    return typeArr;
}


console.log(filterBoats(boats, "sailboat"));