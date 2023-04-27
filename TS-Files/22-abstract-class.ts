console.log("all about Abstract class ");
// if a method is very importamt for add the derives classes
// or the classes which is inherited from parent class 
// there is an abstract method with abstract keyword
// then we also class abstract which take this method
// then every  inherited class from abstract method is compulsory to implement the abstract method

abstract class Person11 {
      private _name: string;

      constructor(name: string) {
            this._name = name;
      }

      get name(): string {
            return this._name;
      }

      set name(newName: string) {
            this._name = newName;
      }
      static createEmployee(name: string) {
            return { name: name, className: "BSSE-A", phone: "03133324617" };

      }
      // abstract method
      abstract describe();
}
class AnotherPerson extends Person11 {

      constructor(name: string) {
            super(name);

      }
      // abstract method
      describe() {
            console.log('Another person is :', this, name)
      }

}
class AnotherPerson2 extends Person11 {

      constructor(name: string) {
            super(name);

      }
      // abstract method
      describe() {
            console.log('Another person is :', this, name)
      }// if we remove this method its an error


}


let v1 = Person11.createEmployee("Ali Hassan");
console.log(v1);
let obj1 = new AnotherPerson('Ali Hassan');

obj1.describe()









