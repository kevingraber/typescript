namespace MyMath {

    // PI is only available from within the namespace b/c we aren't exporting it.
    const PI = 3.14;

    // since we export these functions, they are accessable from outside the namespace. we are essentially making them public!
    // we can call this function with MyMath.calculateCircumference(...)
    export function calculateCircumference(diameter: number): number {
        return diameter * PI;
    }

    export function calculateRectangle(width: number, length: number): number {
        return width * length;
    }
}


// We might want to create a namespace to group these related functions & avoid polluting the global namespace!
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircumference(50));

// We can redeclare PI becuase this PI is registered on the global scope..
const PI = 40;
console.log(PI);
