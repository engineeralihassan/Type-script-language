var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person("John");
console.log(person.name); // Output: "John"
person.name = "Jane";
console.log(person.name); // Output: "Jane"
