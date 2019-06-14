"use strict";
// string
var myName = 'Kevin';
// TS recognizes that we assign a string and automatically assignes the myName variable to type string.
// if we try to assign it to a number the typescript complier will throw an error!
// myName = 10; - ERROR!
// number
var myAge = 30;
// myAge = 'Kevin'; - ERROR!
// boolean
var hasHobbies = true;
// hasHobbies = 1; - ERROR! No type casting!
// By not initializing the variable with a value, or explicitly declaring a type, it defaults to the any type..
// No ERRORS here!
var myRealAge;
myRealAge = 30;
myRealAge = 'Kevin';
// We can explicitly assign types to variables.
// let varname: type = value
var middleName = 'Jordan';
var numAge = 30;
var coolDude = true;
// array
// declares an array of stings
// Two ways of declaring an array: type[] OR Array<type>
var hobbies = ["Movies", "Running", "Coding"];
var cats = ['gusgus', 'gigi'];
// tuples - an array where the type of a ficed number of elements are known.
var address = ["Main Street", 450];
// enum - basically creates a new type
// behind the scenes each 'color' is assigned a number
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green; // 1
// any
var car = 'BMW';
car = { brand: "BMW", series: 3 };
// No ERRORS.. Nothing to see here folks..
// functions..
// Saying that this function will return a string.
function returnName() {
    return myName;
}
// void
// This funciton will not return anything, that's why we use the void type.
function sayHello() {
    console.log('Hey there!');
}
// argument types
// this function will take in 2 numbers and return a number!
function multiply(value1, value2) {
    return value1 * value2;
}
// function as types..?!
// We can only assign a function to this variable that takes in 2 numbers and returns a number!
var myMultiplyFunction;
// myMultiplyFunction = multiply - ALL GOOD!
// myMultiplyFunction = sayHello - ERROR
// objects
var userData = {
    name: 'Kevin',
    age: 30
};
// typescript infers the following object = { name: string, age: number }
// let userData: { name: string, age: number } = {
//      name: 'Kevin',
//      age: 30
// }
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// now we can say..
var complex2 = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
