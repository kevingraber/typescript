// Classes in TypeScript

class Person {
    // don't need to assign properties with 'this.name' like in normal JS.
    // these properties are declared in the class body not the constructor!
    name: string; // - properties are 'public' by default - they are accessable from outside the class.
    // public name: string; // - we can use the 'public' keyword to explicitly make the property public.
    private type: string = 'Default'; // can't be accessed outside the class instance.
    protected age: number = 30; // - like private, but this property will be accessable from any object/class that inherits from this class. can initialize property at the same time too.

    // 'public username: string' is a short hand way of saying 'expect a username arg in the constructor function,
    // but also automatically create a public property in our class and assign the argument you get passed in the constructor to this property.'
    // This is a shortcut for creating the property, getting the argument, and then assigning the argument. can use 'private' / 'protected' in the same way.
    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge(): void {
        console.log(this.age);
        this.setType('Old Man');
    }

    // methods can also be public / private / protected
    private setType(type: string): void {
        this.type = type;
        console.log(`Setting type to ${this.type}`);
    }

}

const person = new Person("Kevin", "xXxBLOODLORDxXx");
console.log(person);
person.printAge();

// Inheritance
class Kevin extends Person {

    constructor(username: string) {
        super("Kevin", username); // when extending a class, you always have to call the constructor of the parent/super class. this is done by calling 'super()';
        this.age = 25;
        // console.log(this.type) - ERROR! Can't access a private method from baseclass!
    }
}
const anotherPerson = new Kevin("Mizin");
console.log(anotherPerson)

// Getters and Setters
class Plant {
    private _species: string = "Default";

    get species(): string {
        return this._species;
    }

    // setters/getters are defined like methods but called/accessed like properties! ex: myPlant.species = 'cactus'.
    set species(value: string) {
        if ( value.length > 3 ) {
            this._species = value;
        } else {
            this._species = 'Default';
        }
    }
}

let plant = new Plant();
console.log(plant.species)
plant.species = 'AB'
console.log(plant.species)
plant.species = 'Cactus'
console.log(plant.species)

// Static Properties & Methods
class Helpers {
    // PI: number = 3.14; - Can only access this method by 1st instantiating the Helpers Class.
    static PI: number = 3.14; // - Now we can use this method like Helpers.PI without having to instantiate the class.
    // - we cna also have static methods
    static calcCircumfrence(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(Helpers.PI);
console.log(Helpers.calcCircumfrence(15));

// Abstract Classes - basically only exist to be inherited from - can't instantiate directly!
abstract class Project {
    projectName: string = "Default";
    budget: number = 5000;

    calcBudget(): number {
        return this.budget * 2;
    }

    // we can also define abstrack methods! here we are saying,
    //'once we have extended this class we need to write a changeName function that implements this changeName shape'
    abstract changeName(name: string): void;
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let myProject = new ITProject();
console.log(myProject);
myProject.changeName('Doomsday Lazer');
console.log(myProject);
