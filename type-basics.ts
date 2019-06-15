// string
let myName = 'Kevin';
// TS recognizes that we assign a string and automatically assignes the myName variable to type string.
// if we try to assign it to a number the typescript complier will throw an error!
// myName = 10; - ERROR!

// number
let myAge = 30;
// myAge = 'Kevin'; - ERROR!

// boolean
let hasHobbies = true;
// hasHobbies = 1; - ERROR! No type casting!

// By not initializing the variable with a value, or explicitly declaring a type, it defaults to the any type..
// No ERRORS here!
let myRealAge;
myRealAge = 30;
myRealAge = 'Kevin';

// We can explicitly assign types to variables.
// let varname: type = value
let middleName: string = 'Jordan';
let numAge: number = 30;
let coolDude: boolean = true;

// array
// declares an array of stings
// Two ways of declaring an array: type[] OR Array<type>
let hobbies: string[] = ["Movies", "Running", "Coding"];
let cats: Array<string> = ['gusgus', 'gigi'];

// tuples - an array where the type of a ficed number of elements are known.
let address: [string, number] = ["Main Street", 450];

// enum - basically creates a new type
// behind the scenes each 'color' is assigned a number
enum Color {
    Gray,   // 0
    Green,  // 1
    Blue    // 2
}

let myColor: Color = Color.Green; // 1

// any
let car: any = 'BMW';
car = { brand: "BMW", series: 3 };
// No ERRORS.. Nothing to see here folks..

// functions..

// Saying that this function will return a string.
function returnName(): string {
    return myName;
}

// void
// This funciton will not return anything, that's why we use the void type.
function sayHello(): void {
    console.log('Hey there!');
}

// argument types
// this function will take in 2 numbers and return a number!
function multiply(value1: number, value2: number): number {
        return value1 * value2;
}

// function as types..?!
// We can only assign a function to this variable that takes in 2 numbers and returns a number!
let myMultiplyFunction: (num1: number, num2: number) => number;
// myMultiplyFunction = multiply - ALL GOOD!
// myMultiplyFunction = sayHello - ERROR

// objects
let userData = {
    name: 'Kevin',
    age: 30
};
// typescript infers the following object = { name: string, age: number }
// let userData: { name: string, age: number } = {
//      name: 'Kevin',
//      age: 30
// }

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}

// type alias
// using the 'type' keyword we can create a new type..
type Complex = { data: number[], output: (all: boolean) => number[] };

// now we can say..
let complex2: Complex = {
    data: [1, 2, 3],
    output: function (all: boolean): number[] {
        return this.data;
    }
}

// union types - using the | pipe character we can define a variable that can be of more that one type
let unionType: number | string = 15;
unionType = 'some string';

// the 'never' type - this function will never return anything.. or has an unreachable endpoint..
function neverReturnsAnything(): never {
    throw new Error('DANGER DANGER');
}

// nullable types
// By default null and undefined are subtypes of all other types.
// That means you can assign null and undefined to something like a number.
let canBeNull = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
