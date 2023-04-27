var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("all about Abstract class ");
// if a method is very importamt for add the derives classes
// or the classes which is inherited from parent class 
// there is an abstract method with abstract keyword
// then we also class abstract which take this method
// then every  inherited class from abstract method is compulsory to implement the abstract method
var Person11 = /** @class */ (function () {
    function Person11(name) {
        this._name = name;
    }
    Object.defineProperty(Person11.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Person11.createEmployee = function (name) {
        return { name: name, className: "BSSE-A", phone: "03133324617" };
    };
    return Person11;
}());
var AnotherPerson = /** @class */ (function (_super) {
    __extends(AnotherPerson, _super);
    function AnotherPerson(name) {
        return _super.call(this, name) || this;
    }
    // abstract method
    AnotherPerson.prototype.describe = function () {
        console.log('Another person is :', this, name);
    };
    return AnotherPerson;
}(Person11));
var AnotherPerson2 = /** @class */ (function (_super) {
    __extends(AnotherPerson2, _super);
    function AnotherPerson2(name) {
        return _super.call(this, name) || this;
    }
    // abstract method
    AnotherPerson2.prototype.describe = function () {
        console.log('Another person is :', this, name);
    }; // if we remove this method its an error
    return AnotherPerson2;
}(Person11));
var v1 = Person11.createEmployee("Ali Hassan");
console.log(v1);
var obj1 = new AnotherPerson('Ali Hassan');
obj1.describe();
