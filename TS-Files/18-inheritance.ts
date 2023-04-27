console.log("The All about Inheritance in the Type script");
console.log("we have to see the inheritance concept in the type script")
class Department1 {
      // private name: string;
      // employees: string[] = [];
      // we can declaire and inilialize these properties in the constructor 
      // by shorthand noatatio
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
      // we can also call the constructor of the parent base class constructor in the child class
      // we call the super for call the constructor of the parent class in the child class
      // we also pass the values ass parameter of this class
      admins: string[] = [];
      constructor(name: string, id: string, admins: string[]) {

            super(name, id);
      }


}
class BioDepart extends Department1 {
      classess: string[] = [];
      // we can also call the constructor of the parent base class constructor in the child class
      // we call the super for call the constructor of the parent class in the child class
      // we also pass the values ass parameter of this class
      admins: string[] = [];
      constructor(name: string, id: string, classes: string[]) {
            super(name, id);
            this.classess = classes;
      }



}
// let obj1 = new Department1('BSSE-A', '23weddf');
// we try to add the Emply is Employes list
let obj2 = new ItDepartment('BSSE-A', 'alama_iqbal123', ['Ali Hassan', 'Asim minir', 'Aslam Iqbal']);
// console.log("Parent class", obj1);
console.log("Child class is ", obj2);
let obj3 = new BioDepart('BSBiology-A', 'biology123', ['Nabeel Unas', 'Anas ashiq', 'Mazhar fareed']);

console.log(obj3);

obj3.addEmployee('Aslam Akhil');
obj3.printEmploy();

