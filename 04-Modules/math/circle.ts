// I can add the export keyword to make a function / constant available outside of this file.
// These values will have to be imported to be used elsewhere!
export const PI = 3.14;

export function calculateCircumference(diameter: number): number {
    return diameter * PI;
}
