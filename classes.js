"use strict";
// Classes in TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // 'public username: string' is a short hand way of saying 'expect a username arg in the constructor function,
    // but also automatically create a public property in our class and assign the argument you get passed in the constructor to this property.'
    // This is a shortcut for creating the property, getting the argument, and then assigning the argument. can use 'private' / 'protected' in the same way.
    function Person(name, username) {
        this.username = username;
        // public name: string; // - we can use the 'public' keyword to explicitly make the property public.
        this.type = 'Default'; // can't be accessed outside the class instance.
        this.age = 30; // - like private, but this property will be accessable from any object/class that inherits from this class. can initialize property at the same time too.
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('Old Man');
    };
    // methods can also be public / private / protected
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log("Setting type to " + this.type);
    };
    return Person;
}());
var person = new Person("Kevin", "xXxBLOODLORDxXx");
console.log(person);
person.printAge();
// Inheritance
var Kevin = /** @class */ (function (_super) {
    __extends(Kevin, _super);
    function Kevin(username) {
        var _this = _super.call(this, "Kevin", username) || this;
        _this.age = 25;
        return _this;
        // console.log(this.type) - ERROR! Can't access a private method from baseclass!
    }
    return Kevin;
}(Person));
var anotherPerson = new Kevin("Mizin");
console.log(anotherPerson);
// Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        // setters/getters are defined like methods but called/accessed like properties! ex: myPlant.species = 'cactus'.
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Cactus';
console.log(plant.species);
// Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    // - we cna also have static methods
    Helpers.calcCircumfrence = function (diameter) {
        return this.PI * diameter;
    };
    // PI: number = 3.14; - Can only access this method by 1st instantiating the Helpers Class.
    Helpers.PI = 3.14; // - Now we can use this method like Helpers.PI without having to instantiate the class.
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.calcCircumfrence(15));
// Abstract Classes - basically only exist to be inherited from - can't instantiate directly!
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 5000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var myProject = new ITProject();
console.log(myProject);
myProject.changeName('Doomsday Lazer');
console.log(myProject);
