console.log("this is public and private properties ");
class Department {
      private name: string;
      employees: string[] = [];
      constructor(name: string) {
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
let obj = new Department('BSSE-A');
// we try to add the Emply is Employes list
obj.addEmployee('Asghar');
obj.addEmployee('Asim');
obj.printEmploy();
