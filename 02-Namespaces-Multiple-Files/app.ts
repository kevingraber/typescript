// We can link to all of our app js files in the HTML document...
// We can use the typescript compiler to explicitly bundle files together.. `tsc --outFile app.js file1.ts file2.ts`
// Or we can import the namespace files into this file! We use the <reference /> tag for this:

/// <reference path="circle-math.ts" />
/// <reference path="rectangle-math.ts" />
console.log(MyMath.calculateArea(10, 20));
console.log(MyMath.calculateCircumference(50));

// We can compile everything into one app.js with the following command..
// tsc app.ts --outFile app.js
// Files are added in order listed!
// tsc <inputfilename> --outFile <outputfilename>
