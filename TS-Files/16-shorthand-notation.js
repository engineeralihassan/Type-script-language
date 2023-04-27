console.log("wellcome to Short hand notation in type script");
console.log("this is public and private properties ");
var Department1 = /** @class */ (function () {
    // private name: string;
    // employees: string[] = [];
    // we can declaire and inilialize these properties in the constructor 
    // by shorthand noatatio
    function Department1(name, id, employees) {
        if (employees === void 0) { employees = []; }
        this.name = name;
        this.id = id;
        this.employees = employees;
        this.name = name;
    }
    Department1.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
        console.log(this.name, 'Has the student ', this.employees.length);
    };
    Department1.prototype.printEmploy = function () {
        console.log(this.employees);
    };
    return Department1;
}());
var obj1 = new Department1('BSSE-A', '23weddf');
// we try to add the Emply is Employes list
console.log(obj1);
obj1.addEmployee('Asghar');
obj1.addEmployee('Asim');
obj1.printEmploy();
