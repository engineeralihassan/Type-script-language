// in this we see how we ovverrde the methods of the base class
console.log('OverRide methods in TS classes');

class Department1 {

      constructor(private name: string, private id: string, public employees: string[] = []) {
            this.name = name
      }

      addEmployee(employee: string) {

            this.employees.push(employee);
            console.log(this.name, 'Has the student ', this.employees.length);
      }
      printEmploy() {
            console.log(this.employees);
      }
}

class ItDepartment extends Department1 {
      age: string[] = [];
      admins: string[] = [];
      constructor(name: string, id: string, admins: string[]) {

            super(name, id);
      }


}
class BioDepart extends Department1 {
      classess: string[] = [];


      admins: string[] = [];
      constructor(name: string, id: string, classes: string[]) {
            super(name, id);
            this.classess = classes;
      }
      // if we want to use the private property of the parent class this is an error
      // we convert this innto the derived class property and then we do this
      addEmployee(employee: string) {
            if (employee === 'Ali') {
                  return;
            }
            // this.employees.push(employee);
            super.addEmployee(employee);
      }



}

let obj2 = new ItDepartment('BSSE-A', 'alama_iqbal123', ['Ali Hassan', 'Asim minir', 'Aslam Iqbal']);
console.log("Child class is ", obj2);
let obj3 = new BioDepart('BSBiology-A', 'biology123', ['Nabeel Unas', 'Anas ashiq', 'Mazhar fareed']);

console.log(obj3);

obj3.addEmployee('Aslam Akhil');
obj3.printEmploy();
obj3.addEmployee('Ali Hassan');
console.log(obj3.printEmploy());
obj3.addEmployee('Ali h');
console.log(obj3.printEmploy());
obj3.addEmployee('Ali Hashmi');
console.log(obj3.printEmploy());



