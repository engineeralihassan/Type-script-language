console.log('we will see the type guarding in TS');
// how we check the types of the functions classes and variables
type combineable = number | string;
type numeric = number | boolean;
function getadd(a: combineable, b: numeric) {
      if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b;
      }
      if (typeof a === 'number' || typeof b === 'number') {
            return +a + +b;
      }



}
interface ali {
      name: string;
      plans: string[];

}
interface asim {
      name: string;
      profit: number;

}
interface ceo extends ali, asim { };

type unknownEmploy = ali | asim;
let superEmploy = {
      name: 'Ali Hassan',
      profit: '3500000',
      plans: ['More Staff', 'Break time', 'Holidays more ']
}

function EmployInfo(emp: unknownEmploy) {
      if ('profit' in emp) {
            console.log("Manager:", emp.name)
            console.log('Profite:', emp.profit)
      }
      if ('plans' in emp) {
            console.log("Owner:", emp.name)
            console.log('Plans:', emp.plans)
      }
      console.log("function call")
}
EmployInfo(superEmploy);
EmployInfo({ name: 'Ali Hassan', plans: ['decrease work in Ramzan', 'pray from Allah side '] });
EmployInfo({ name: 'Asim Azhar', profit: 30000 });



// for classes
class Car {
      drive() {
            console.log('You have driving licence 😁😀')
      }
}
class Truck {
      drive() {
            console.log("You driving licence of Truch 😎😋")
      }

      loadingCargo() {
            console.log("Yuo give loading service to Users")
      }

}




type vehicle = Car | Truck;

function useVehicle(veh: vehicle) {
      // if ('loadingCargo' in veh) {
      //       console.log(veh.drive());
      //       console.log(veh.loadingCargo());
      // }
      if (veh instanceof Truck) {
            console.log(veh.drive());
            console.log(veh.loadingCargo());
      }
      else {
            console.log("You drive Car only and no loading service")

      }
}
let obj1 = new Car();
useVehicle(obj1);

