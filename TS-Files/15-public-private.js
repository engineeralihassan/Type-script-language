console.log("this is public and private properties ");
var Department = /** @class */ (function () {
    function Department(name) {
        this.employees = [];
        this.name = name;
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
        console.log(this.name, 'Has the student ', this.employees.length);
    };
    Department.prototype.printEmploy = function () {
        console.log(this.employees);
    };
    return Department;
}());
var obj = new Department('BSSE-A');
// we try to add the Emply is Employes list
obj.addEmployee('Asghar');
obj.addEmployee('Asim');
obj.printEmploy();
