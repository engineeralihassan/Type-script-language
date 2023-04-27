console.log("all about Static methods ");

// methods which we call with out makes instace of the class
// called Static methods
class Person1 {
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
}


let v = Person1.createEmployee("Ali Hassan");
console.log(v);










