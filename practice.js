const listings = [
  { id: 1, name: "Sea Queen",   type: "yacht",    price: 900000,   available: true },
  { id: 2, name: "Blue Sky",    type: "sailboat", price: 150000,   available: true },
  { id: 3, name: "Ocean Star",  type: "yacht",    price: 700000,   available: true },
  { id: 4, name: "Sea Queen",   type: "yacht",    price: 900000,   available: true }, // duplicate name
  { id: 5, name: "River Run",   type: "fishing",  price: 40000,    available: false },
  { id: 6, name: "Wind Rider",  type: "sailboat", price: 200000,   available: true },
  { id: 7, name: "Blue Sky",    type: "sailboat", price: 150000,   available: true }  // duplicate name
];

function buildBoatSections(listings) {
    let grouped = {};
    let deduped = [];

    for ( let i = 0; i < listings.length; i++ ) {
        const { id, name, type, price, available } = listings[i];

        if ( available === true && price >= 100000 && !deduped.includes(name) ) {
            deduped.push(name);

            if (!grouped[type]) {
                grouped[type] = {
                    type: type,
                    boats: [
                        
                    ]
                }
            }

            grouped[type].boats.push({ id, name, price });
            grouped[type].boats.sort((a,b) => b.price - a.price);
        }
    }

    return Object.values(grouped);
}

console.log(JSON.stringify(buildBoatSections(listings), null, 2));