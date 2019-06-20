// Paths are relevant!
import { PI, calculateCircumference } from "./math/circle";
import { calculateArea } from "./math/rectangle";

console.log(PI);
console.log(calculateCircumference(10));
console.log(calculateArea(10, 10));

// import * as Circle from "./math/circle";
// console.log(Circle.PI);
// console.log(Circle.calculateCircumference(10));

// import calc from "./math/rectangle";
// calc(calculateArea(10, 10));

// when resolving imports typescript know whether you are using a relative or absolute path
// when using an absolute path TS looks in the node_modules folder by default
