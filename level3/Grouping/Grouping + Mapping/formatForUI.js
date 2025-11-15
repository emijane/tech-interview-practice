const rawData = [
  { id: 1, category: "Electronics", name: "Laptop",     price: 1200 },
  { id: 2, category: "Electronics", name: "Camera",     price: 900  },
  { id: 3, category: "Clothing",    name: "Jeans",      price: 50   },
  { id: 4, category: "Clothing",    name: "T-Shirt",    price: 20   },
  { id: 5, category: "Grocery",     name: "Apples",     price: 4    },
  { id: 6, category: "Grocery",     name: "Bananas",    price: 3    }
];

function formatForUI(rawData) {
    let grouped = {};

    for ( let i = 0; i < rawData.length; i++ ) {
        let id = rawData[i].id;
        let category = rawData[i].category;
        let name = rawData[i].name;
        let price = rawData[i].price;

        if (!grouped[category]) {
            grouped[category] = {
                category: category,
                items: []
            };
        }

        grouped[category].items.push({ id, name, price});
    }

    return Object.values(grouped);
}

console.log(formatForUI(rawData));