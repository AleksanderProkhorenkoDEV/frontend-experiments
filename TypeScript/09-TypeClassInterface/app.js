/**
 * The characteristic of implementing interfaces to a class is that its properties and methods must be of public type, they can be neither private nor protected.
 *
 */
var Person = /** @class */ (function () {
    function Person(gender, name) {
        this.gender = gender;
        this.name = name;
    }
    Person.prototype.sayHi = function () {
        console.log("Hi ".concat(this.gender, "!"));
    };
    return Person;
}());
var persona = new Person('male', 'Aleks');
