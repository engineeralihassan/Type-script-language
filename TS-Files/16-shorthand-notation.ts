console.log("wellcome to Short hand notation in type script");
console.log("this is public and private properties ");
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
let obj1 = new Department1('BSSE-A', '23weddf');
// we try to add the Emply is Employes list
console.log(obj1)
obj1.addEmployee('Asghar');
obj1.addEmployee('Asim');
obj1.printEmploy();
