var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateArea(width, length) {
        return width * length;
    }
    MyMath.calculateArea = calculateArea;
})(MyMath || (MyMath = {}));
// We can link to all of our app js files in the HTML document...
// We can use the typescript compiler to explicitly bundle files together.. `tsc --outFile app.js file1.ts file2.ts`
// Or we can import the namespace files into this file! We use the <reference /> tag for this:
/// <reference path="circle-math.ts" />
/// <reference path="rectangle-math.ts" />
console.log(MyMath.calculateArea(10, 20));
console.log(MyMath.calculateCircumference(50));
// We can compile everything into one app.js with the following command..
// tsc app.ts --outFile app.js
// tes <inputfilename> --outFile <outputfilename>
