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
console.log("All about Private constructor and its also called the sigleton pattern ");
// its mean we create only one instance for the class
console.log("all about Abstract class ");
// if a method is very importamt for add the derives classes
// or the classes which is inherited from parent class 
// there is an abstract method with abstract keyword
// then we also class abstract which take this method
// then every  inherited class from abstract method is compulsory to implement the abstract method
var Person13 = /** @class */ (function () {
    function Person13(name) {
        this._name = name;
    }
    Object.defineProperty(Person13.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Person13.createEmployee = function (name) {
        return { name: name, className: "BSSE-A", phone: "03133324617" };
    };
    return Person13;
}());
var AnotherPerson4 = /** @class */ (function (_super) {
    __extends(AnotherPerson4, _super);
    function AnotherPerson4(name) {
        return _super.call(this, name) || this;
    }
    // abstract method
    AnotherPerson4.prototype.describe = function () {
        console.log('Another person is :', this, name);
    };
    return AnotherPerson4;
}(Person11));
var AnotherPerson3 = /** @class */ (function (_super) {
    __extends(AnotherPerson3, _super);
    function AnotherPerson3(name) {
        return _super.call(this, name) || this;
    }
    // create instance of the static method
    AnotherPerson3.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AnotherPerson3('Ali Hassan');
        return this.instance;
    };
    // abstract method
    AnotherPerson3.prototype.describe = function () {
        console.log('Another person is :', this, name);
    }; // if we remove this method its an error
    return AnotherPerson3;
}(Person11));
var v11 = Person11.createEmployee("Ali Hassan");
console.log(v1);
var obj11 = new AnotherPerson4('Ali Hassan');
obj1.describe();
// for example we have only one depart in the Acounting 
// we want to make only one instance for this 
// we make the constructor of this class is private
// #  use this class instance\
var privateInctance = AnotherPerson3.getInstance();
var privateInctance1 = AnotherPerson3.getInstance();
console.log(privateInctance, privateInctance1);
// these  both are from same instance
// we could not create the onother instance  
