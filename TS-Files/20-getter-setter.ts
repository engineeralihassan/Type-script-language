class Person {
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
}

let person = new Person("John");
console.log(person.name); // Output: "John"

person.name = "Jane";
console.log(person.name); // Output: "Jane"