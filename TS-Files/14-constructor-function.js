console.log("Wellcome to constructors functions  files ");
// # This keyword is reffer to this class
var Department = /** @class */ (function () {
    function Department(name, age) {
        this.name5555 = name;
        this.age = age;
    }
    // we declare method in ts class like this
    // description() {
    //       console.log("the name is ", this.name5555);
    // }
    Department.prototype.usethis = function () {
        console.log('Hello Mr ' + this.name5555 + 'and your age is ', this.age);
    };
    return Department;
}());
var obj55 = new Department('Anjum Tajran', 23);
console.log(obj55);
var c = obj55.name5555;
console.log(c);
// make the use of this keyword specialy
var departmentCopy = { name5555: 'Aslam khial', desc: obj55.usethis };
console.log(departmentCopy.desc());
console.log("This is the last chance to ge the data");
// if we could not ahve the property in the copt object then we  use the bind method 
var copy1 = { desc1: obj55.usethis };
console.log(copy1.desc1.bind(obj55)());
