console.log("all about Static methods ");
// methods which we call with out makes instace of the class
// called Static methods
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this._name = name;
    }
    Object.defineProperty(Person1.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Person1.createEmployee = function (name) {
        return { name: name, className: "BSSE-A", phone: "03133324617" };
    };
    return Person1;
}());
var v = Person1.createEmployee("Ali Hassan");
console.log(v);
