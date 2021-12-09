
// let name: string;
let name: any;
// instead of any we can use unknown
let personName: unknown;

let age: number;
let age2: number | string;
age2 = 'thirty';

let isStudent: boolean;
let hobbies: string[];

let marks: number[];
let role: [number, string];
role = [3, 'sajjad']


// let printName: Function;
// void return undefined
// let printName: (name: string) => void;
// let printName: (name: string) => number;
// let printName: (name: string) => number;
// never return nothing
let printName: (name: string) => never;

// function printName(user: string) {
//   console.log(user);

// }
// printName("sajjad");





// // method 1
// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: "sajjad",
//   // age: 20,
// }

// // method 2
// let person2: { name: string; age: number } = {
//   name: "sajjad",
//   age: 20,
// }



// let lotsOfPeople: Person[];

// lotsOfPeople = [
//   { name: 'Sajjad', age: 30 },
//   { name: 'Mahmud', age: 25 },
// ];


// // Interface - same as type; 
interface Person {
    name: string;
    age?: number;
};


// but type can be extended like as below
type X = {
    a: string;
    b: number;
}

type Y = X & {
    c: string;
    d: number;
}

let y: Y = {
    c: 'Sajjad',
    d: 23,
    a: 'Mahmud',
    b: 34,
}



type X2 = Person & {
    a: string;
    b: number;
}

// interface is simpler and extended as below
interface Guy extends Person {
    profession: string;
}