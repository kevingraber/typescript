// let & const
// let & const are block scoped.

let testName = 'kevin';
testName = 'jordan';

const maxlevel = 60;
// maxlevel = 120; - ERROR!

// Block scope
let myNumber = 10;
if (true) {
    let myNumber = 20;
}
console.log(myNumber) // 10;

// Default Parameters
// 10 will be used if no value is passed in for 'start' parameter
const countdown = (start: number = 10): void => {
    while (start > 0) {
        start--;
    }
    console.log('Done!', start)
}
countdown(20) // - will be called with value 20
countdown() // - Wil be called with 10!

// Rest & Spread
const numbers = [1, 10, 99, -50];
console.log(Math.max(33, 99, 10, -3));
// Can't pass numbers array into Math.maxlevel
Math.max(...numbers) // - Can use the spread operator to spread our array out into single values.

// when we use ... as param it means turn all provided arguments into an array.
// all args after name will be combined into an array.
function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log('Kevin', 1, 2, 5)

// Destructuring
const myHobbies = ["Movies", "Games"];
const [hobby1, hobby2] = myHobbies; // will create 2 new constants, and will assign values of myHobbies[0], and myHobbies[1] respectivly

const userInfo = { userName: "Kevin", age: 30 }
const { userName, age } = userInfo;
// const { userName: myName, age: myAge } = userData; We can assign different variable names like this!

// Template Literals
const user = "Kevin";
const greeting = `Hello ${user}, how are you doing today?`;

// Symbols, Iterators, Generators oh my!
