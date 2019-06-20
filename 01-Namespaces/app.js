var MyMath;
(function (MyMath) {
    // PI is only available from within the namespace b/c we aren't exporting it.
    var PI = 3.14;
    // since we export these functions, they are accessable from outside the namespace. we are essentially making them public!
    // we can call this function with MyMath.calculateCircumference(...)
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
// We might want to create a namespace to group these related functions & avoid polluting the global namespace!
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircumference(50));
// We can redeclare PI becuase this PI is registered on the global scope..
var PI = 40;
console.log(PI);
