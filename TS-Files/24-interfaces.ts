console.log("All about the Interfaces in types script");
// its define the structure of object
// interface objInterface {
//       name: string;
//       age: number;
//       hello(phrase: string): void;
// }
// let person: objInterface = {
//       name: 'Ali',
//       age: 30,
//       hello(phase: string) {
//             console.log("Phras :", this.name);
//       }

// };
// // this object is miss the some properties
// // to avoid this situation we make an interface for this 


// let otherPerson: objInterface = {

//       name: "Ali hassan",
//       // we create these missing properties again
//       age: 30,
//       hello(phrase: string) {
//             console.log("Hy ali ")
//       }
// }

// we also use thwe type keywor d to achieve the dame functionality

interface int2 {
      readonly roll: string
}
interface objInterface {
      name: string;
      age?: number;
      hello(phrase: string): void;
}
let person: objInterface = {
      name: 'Ali',
      age: 30,
      hello(phase: string) {
            console.log("Phras :", this.name);
      }

};


let otherPerson: objInterface = {

      name: "Ali hassan",
      age: 30,
      hello(phrase: string) {
            console.log("Hy ali ")
      }
}

// we also do make an interface for the classes also

class class1 implements objInterface, int2 {
      name: string;
      age: number;//we miss this we get error
      roll: string
      constructor(name: string, roll: string) {
            this.name = name;
            this.roll = roll;
      }
      hello(phrase: string) {
            console.log("prase for :", this.name);

      }
      grreting() {
            console.log("Wellcome to classes interfaces");

      }
}

let john: objInterface | int2 = new class1('Ali Hassan', '5052');

// john.hello('Good Morning');
// let leela: class1 = new class1('Leela');
// leela.grreting();


// #### Intersection in interfaces
type p1 = {
      name: string;
      data: string;
}
type p2 = {
      name: string;
      cols: string[];
}

type supp = p1 & p2

let emp: supp = {
      name: 'ali',
      cols: ['ali Hassan', '34'],
      data: 'ahsan'
}
console.log(emp);

// change this into intrface



interface I1 {
      name: string;
      data: string;
}
interface I2 {
      name: string;
      cols: string[];
}

interface supI extends p1, p2 { }

let emp1: supI = {
      name: "Ali hassan",
      cols: ['ali Hassan', '34'],
      data: 'ahsan'
}
console.log(emp1);


type common = number | string;
type numerice = number | boolean;
// let num1:numerice='Ali hassan'//error
let num1: numerice = false;
num1 = 23;
console.log(num1);







