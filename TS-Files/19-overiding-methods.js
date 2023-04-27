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
// in this we see how we ovverrde the methods of the base class
console.log('OverRide methods in TS classes');
var Department1 = /** @class */ (function () {
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
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(name, id, admins) {
        var _this = _super.call(this, name, id) || this;
        _this.age = [];
        _this.admins = [];
        return _this;
    }
    return ItDepartment;
}(Department1));
var BioDepart = /** @class */ (function (_super) {
    __extends(BioDepart, _super);
    function BioDepart(name, id, classes) {
        var _this = _super.call(this, name, id) || this;
        _this.classess = [];
        _this.admins = [];
        _this.classess = classes;
        return _this;
    }
    // if we want to use the private property of the parent class this is an error
    // we convert this innto the derived class property and then we do this
    BioDepart.prototype.addEmployee = function (employee) {
        if (employee === 'Ali') {
            return;
        }
        // this.employees.push(employee);
        _super.prototype.addEmployee.call(this, employee);
    };
    return BioDepart;
}(Department1));
var obj2 = new ItDepartment('BSSE-A', 'alama_iqbal123', ['Ali Hassan', 'Asim minir', 'Aslam Iqbal']);
console.log("Child class is ", obj2);
var obj3 = new BioDepart('BSBiology-A', 'biology123', ['Nabeel Unas', 'Anas ashiq', 'Mazhar fareed']);
console.log(obj3);
obj3.addEmployee('Aslam Akhil');
obj3.printEmploy();
obj3.addEmployee('Ali Hassan');
console.log(obj3.printEmploy());
obj3.addEmployee('Ali h');
console.log(obj3.printEmploy());
obj3.addEmployee('Ali Hashmi');
console.log(obj3.printEmploy());
