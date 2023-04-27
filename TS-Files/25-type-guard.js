console.log('we will see the type guarding in TS');
function getadd(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b;
    }
    if (typeof a === 'number' || typeof b === 'number') {
        return +a + +b;
    }
}
;
var superEmploy = {
    name: 'Ali Hassan',
    profit: '3500000',
    plans: ['More Staff', 'Break time', 'Holidays more ']
};
function EmployInfo(emp) {
    if ('profit' in emp) {
        console.log("Manager:", emp.name);
        console.log('Profite:', emp.profit);
    }
    if ('plans' in emp) {
        console.log("Owner:", emp.name);
        console.log('Plans:', emp.plans);
    }
    console.log("function call");
}
EmployInfo(superEmploy);
EmployInfo({ name: 'Ali Hassan', plans: ['decrease work in Ramzan', 'pray from Allah side '] });
EmployInfo({ name: 'Asim Azhar', profit: 30000 });
// for classes
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('You have driving licence 😁😀');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("You driving licence of Truch 😎😋");
    };
    Truck.prototype.loadingCargo = function () {
        console.log("Yuo give loading service to Users");
    };
    return Truck;
}());
function useVehicle(veh) {
    // if ('loadingCargo' in veh) {
    //       console.log(veh.drive());
    //       console.log(veh.loadingCargo());
    // }
    if (veh instanceof Truck) {
        console.log(veh.drive());
        console.log(veh.loadingCargo());
    }
    else {
        console.log("You drive Car only and no loading service");
    }
}
var obj1 = new Car();
useVehicle(obj1);
