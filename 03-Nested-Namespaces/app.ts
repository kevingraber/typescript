/// <reference path="circle-math.ts" />
console.log(MyMath.Circle.calculateCircumference(50));

// Another method - NOT ES6 IMPORT! We are creating an alias here..
// import CircleMath = MyMath.Circle;
// console.log(CircleMath.calculateCircumference(50));

// Limitations of Namespaces
// We have to manually link our files and we hace to make sure they are in the right order
// Our files/modules are not very declaritive about what they need.. hard to see which file requires which dependencies
// Want to use modules for medium-sized to large projects!
