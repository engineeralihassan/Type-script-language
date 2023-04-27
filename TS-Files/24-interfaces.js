console.log("All about the Interfaces in types script");
var person = {
    name: 'Ali',
    age: 30,
    hello: function (phase) {
        console.log("Phras :", this.name);
    }
};
var otherPerson = {
    name: "Ali hassan",
    age: 30,
    hello: function (phrase) {
        console.log("Hy ali ");
    }
};
// we also do make an interface for the classes also
var class1 = /** @class */ (function () {
    function class1(name, roll) {
        this.name = name;
        this.roll = roll;
    }
    class1.prototype.hello = function (phrase) {
        console.log("prase for :", this.name);
    };
    class1.prototype.grreting = function () {
        console.log("Wellcome to classes interfaces");
    };
    return class1;
}());
var john = new class1('Ali Hassan', '5052');
// john.hello('Good Morning');
// let leela: class1 = new class1('Leela');
// leela.grreting();
