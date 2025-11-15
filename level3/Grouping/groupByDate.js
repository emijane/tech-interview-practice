const orders = [
  { id: 1, date: "2025-01-10", item: "Laptop" },
  { id: 2, date: "2025-01-10", item: "Mouse" },
  { id: 3, date: "2025-01-11", item: "Keyboard" },
  { id: 4, date: "2025-01-12", item: "Monitor" },
  { id: 5, date: "2025-01-11", item: "USB Cable" },
  { id: 6, date: "2025-01-12", item: "Speakers" }
];


function groupByDate(orders) {
    let grouped = {};

    for ( let i = 0; i < orders.length; i++ ) {
        let date = orders[i].date;
        let item = orders[i].item;

        if ( !grouped[date] ) {
            grouped[date] = [];
        }

        grouped[date].push(item);
    }

    return grouped;
}

console.log(groupByDate(orders));