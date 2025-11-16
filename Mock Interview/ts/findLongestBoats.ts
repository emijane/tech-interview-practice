// Define what a Boat looks like
export type Boat = {
    id: number;
    name: string;
    type: string;
    price: number;
    length: number;
};

// The structure of your input JSON
export type InputData = {
    boats: Boat[];
};

// You can return ANYTHING for now (beginner friendly)
export type Output = any;

// Your main function
export function transformBoats(data: InputData): Output {

    // const grouped = {}; creates an empty object
    // { [key: string]: any }
    // the object will have keys, and each key is a string
    const grouped: { [key: string]: any } = {};

    for ( let i = 0; i < data.boats.length; i++ ) {
        const boat = data.boats[i];
        const type = boat.type;

        if ( !grouped[type] ) {
            grouped[type] = boat;
        } else if (boat.length > grouped[type].length) {
            grouped[type] = boat;
        }
    }

    return grouped;
}
