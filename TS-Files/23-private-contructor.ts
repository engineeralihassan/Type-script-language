console.log("All about Private constructor and its also called the sigleton pattern ");
// its mean we create only one instance for the class
console.log("all about Abstract class ");
// if a method is very importamt for add the derives classes
// or the classes which is inherited from parent class 
// there is an abstract method with abstract keyword
// then we also class abstract which take this method
// then every  inherited class from abstract method is compulsory to implement the abstract method

abstract class Person13 {
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
class AnotherPerson4 extends Person11 {

      constructor(name: string) {
            super(name);

      }
      // abstract method
      describe() {
            console.log('Another person is :', this, name)
      }

}
class AnotherPerson3 extends Person11 {
      private static instance: AnotherPerson3;
      private constructor(name: string) {
            super(name);

      }
      // create instance of the static method

      static getInstance() {
            if (this.instance) {
                  return this.instance;
            }
            this.instance = new AnotherPerson3('Ali Hassan');
            return this.instance
      }






      // abstract method
      describe() {
            console.log('Another person is :', this, name)
      }// if we remove this method its an error


}


let v11 = Person11.createEmployee("Ali Hassan");
console.log(v1);
let obj11 = new AnotherPerson4('Ali Hassan');

obj1.describe()
// for example we have only one depart in the Acounting 
// we want to make only one instance for this 
// we make the constructor of this class is private
// #  use this class instance\
let privateInctance = AnotherPerson3.getInstance()
let privateInctance1 = AnotherPerson3.getInstance()
console.log(privateInctance, privateInctance1);
// these  both are from same instance
// we could not create the onother instance  








