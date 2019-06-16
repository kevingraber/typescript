"use strict";
// let & const
// let & const are block scoped.
var testName = 'kevin';
testName = 'jordan';
var maxlevel = 60;
// maxlevel = 120; - ERROR!
// Block scope
var myNumber = 10;
if (true) {
    var myNumber_1 = 20;
}
console.log(myNumber); // 10;
// Default Parameters
// 10 will be used if no value is passed in for 'start' parameter
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
};
countdown(20); // - will be called with value 20
countdown(); // - Wil be called with 10!
// Rest & Spread
var numbers = [1, 10, 99, -50];
console.log(Math.max(33, 99, 10, -3));
// Can't pass numbers array into Math.maxlevel
Math.max.apply(Math, numbers); // - Can use the spread operator to spread our array out into single values.
// when we use ... as param it means turn all provided arguments into an array.
// all args after name will be combined into an array.
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log('Kevin', 1, 2, 5);
// Destructuring
var myHobbies = ["Movies", "Games"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1]; // will create 2 new constants, and will assign values of myHobbies[0], and myHobbies[1] respectivly
var userInfo = { userName: "Kevin", age: 30 };
var userName = userInfo.userName, age = userInfo.age;
// const { userName: myName, age: myAge } = userData; We can assign different variable names like this!
// Template Literals
var user = "Kevin";
var greeting = "Hello " + user + ", how are you doing today?";
// Symbols, Iterators, Generators oh my!
