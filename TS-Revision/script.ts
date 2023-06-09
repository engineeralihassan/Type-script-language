/*
// Type script is the super set of the js
console.log(`JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

For example, TypeScript will report an error when
 passing a string into a function that expects a number. JavaScript will not.`);
console.log('TypeScript has an official compiler which can be installed through npm.');
console.log(`npm install typescript --save-dev`)
// # Data types 
// Ts sopports all the data types that are supported by the java script
console.log("Welcome to Type script revsions term")
// implicit
let number = 123;
let number1 = 12.34;
let number3 = 12.4567;
//Explicit
let number4: number = number;


// Boolean
let isPrime = false;
let isOdd = true;
let isEven: boolean = false;

// strings
let name1 = "Ali Hassan";
console.log(name1);
let name2: string = name1;

// Error trow
let number5 = 45;
//number5="Ali Hassan"; // its ann erro in compile time 
let number6: number = 23;
//number6="Ali Hassan" // Definately Error


//# Special Data types 
// Any
let rollno = 5073;
//rollno="BSSE-A";  type error 
let rool: any = 5063;
rool = "BSSE-A-Evening";
// unknown 
let number7: unknown;
let number8: any;
let str: string;
//str=number7; compile type error
str = number8; // no error in the case of any

// Never type
// when an function innnot return any thing is called the never
function ApiError(arg1, arg2) {
      throw { arg1, arg2 }
}
ApiError("Server side error", 2345);
// Objects data type in Ts
type objectType = { name: string, age: number, standard: string };
let person: objectType = {
      name: "Ali Hassan",
      age: 45,
      standard: "BSSE-A-Evening",

}
console.log(person.age);
console.log(person.standard);
const car: {
      type:
      string
      , model:
      string
      , year:
      number
} = {
      type: "Toyota",
      model: "Corolla",
      year: 2009
};

// Array in ts

let fiends: string[] = ["Ali", "Hassan", "Sajib", "Anaga"];
console.log(fiends[2]);
let fixed: [string, number, boolean] = ["Ali Hassan", 21, false];
let mixed: any[] = ["Ali Hassan", "BSSe-a", 21, "5063", ["Amjad sabri", "Babar", "Rizwan"]];
console.log(mixed[4]);
let s: number[] = [12, 34, 56, 78, 90];
console.log(s[2]);
*/
/*
// Tuples in TS
let tupple: [string, boolean, number] = ["Ali", false, 5063];
tupple.push("Amjad sabri");
console.log(tupple);
// enums
enum Role {
      admin = 10, user, manager, slaeman
}
console.log(Role);
console.log(Role.admin);
let a = Role.slaeman;
console.log(a);
console.log(Role[2]);
// console.log(Role.manager == 2);
console.log(Role[1] === 'user');


// Literals
let num: string | number = 23;
num = "Ali Hassan";
console.log(num);

// Functions Return type
function sum(a, b): number {
      return a + b;
}
console.log(sum(12, 45));

// arguments types

function product(a: number, b: number, c: string) {
      console.log(a, b, c)
}

// assign a function to variable
let d = product(12, 23, "Ali Hasan");
console.log(d);
let f: Function;
f = product;
;
console.log(f(12, 34, "Amjad sabri"));
// Allias and interfaces
// Type Aliases allow defining types with a custom name(an Alias).
type grade = string;
type rollNo = number;
type time = string;
type student = {
      grade: grade,
      roll: rollNo,
      time: time,

}
let car: student["time"];
car = "Ali hassan";
console.log(car);

// interfaces
interface student1 {
      name: string,
      age: number,
      cast: string,
      address: string,
      rollno: number,
      section: string
}

let student3: student1 = {
      name: 'Ali Hassan',
      age: 21,
      cast: "Arain",
      address: "Chack no 11 1/L",
      rollno: 5063,
      section: "A"
}
console.log(student3);
console.log(student3.rollno);
console.log(student3.name);

// union types
let sum1: boolean | string = false;
sum1 = "true";
console.log(sum1);

// functions
function func1(a: number, b: string): void {
      console.log("This is the Viod return type function", a, b)
}
// opetional parameters
function getsum(a: number, b: number, c?: number): number {
      return a + b + (c || 0);
}
console.log(getsum(12, 34));
console.log(getsum(12, 45, 67));
// defualt values 
function func2(a: number = 12, b: string = "Aslam") {
      console.log(a, b);
}
func2();
func2(45, "Ali hassan");
// named parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
      return dividend / divisor;
}

interface s1 {
      dividend: number,
      divisor: number
}

// Rest parameters
function func3(a: string, ...rest) {
      console.log(a);
      for (let i = 0; i < rest.length; i++) {
            console.log(rest[i]);
      }
}
func3("Ali Hassan Friends", "Aans", "Usman", "Husnain", 23, "Adeel", "Boos naveed", false);


// Allias for functions
type fun = (value: number) => number;
function fun1(value): fun {
      return value + 10;
}

let fun3 = (value) => value * 34;
console.log(fun3(23));
*/

// we can also make the multiple files and compile the all the files at onece in type script
// for do this we need to generste the type script config file first then we
//compile all the ts file and get the result at once in type script
// tsc -init to make the config file
// tsc -w for the compile all the ts files ain this current directory


// OOP is start from Here
// classes


console.log("OOP is started from Her in type script");
class MYClass {
      name: string;
      constructor(name: string) {
            this.name = name;
      }
}
let obj = new MYClass("Ali Hassan");

console.log(obj.name)


// Access specifiers

class Bank {
      private balance;
      public constructor(balance: number) {
            this.balance = balance;
      }
      public getBalance() {
            console.log(this.balance);
      }

}

let bank = new Bank(234567);
bank.getBalance();
// shorthand property and
class MYClass2 {
      constructor(private name: string) { }
      public printName() {
            console.log(this.name);
      }
}
let obj2 = new MYClass2("Ali Hassan");
obj2.printName();

// readonly
class MYClass3 {
      readonly name: string;
      constructor(name: string) {
            // name could not change after this
            this.name = name;
      }
      public printName() {
            console.log(this.name);
      }
}
let obj3 = new MYClass3("amjad ali");
obj3.printName();

// inheritance
interface Shap {
      getArea: () => number;
}

class Rectangle implements Shap {
      public constructor(private width: number, private height: number) { }
      public getArea(): number { return this.width * this.height; }
}

let shap = new Rectangle(12, 34);
let f = shap.getArea();
console.log(f);

class Circle extends Rectangle {
      public constructor(width: number, height: number) {
            super(width, height);
      }

}

let circle = new Circle(2, 34);
let s = circle.getArea();
console.log(s);
// ovveride
interface Shape1 {
      getArea: () => number;
}
class Rectangle1 implements Shape1 {
      // using protected for these members allows access from classes that extend from this class, such as Square
      public constructor(protected readonly width: number, protected readonly height: number) { }

      public getArea(): number {
            return this.width * this.height;
      }

      public toString(): string {
            return `Rectangle[width=${this.width}, height=${this.height}]`;
      }
}

class Square extends Rectangle1 {
      private cnic: number;
      public constructor(width: number) {
            super(width, width);
      }

      // this toString replaces the toString from Rectangle
      public override toString(): string {
            return `Square[width=${this.width}]`;
      }
      // getter setter
      set cnic1(nwcnic: number) {
            this.cnic = nwcnic;
      }
      get cnic1(): number {
            return this.cnic;
      }
}

class MYClass4 {
      private name: string;
      public static GetDetails(name: string) {
            console.log(`Name : ${name} class : BSSE-A  Roll no : 5063`);
      }
      static createEmployee(name: string) {
            return { name: name, className: "BSSE-A", phone: "03133324617" };

      }
}


let overrideobj = new Square(23);
console.log(overrideobj.toString());

overrideobj.cnic1 = 1234567890;
console.log(overrideobj.cnic1);

console.log("Static method is called");
MYClass4.GetDetails("Ali Hassan");

// Dome type script
let paragraph = document.querySelector('p');
console.log(paragraph?.textContent);
// let input = <HTMLInputElement>document.querySelector('input');
let input = document.querySelector('input') as HTMLInputElement;

input.value = 'Hello ali hassan';

console.log(input?.value);
// we can tell the type script this is input element
let btn = document.querySelector('button')?.innerText;
console.log(btn);
MYClass4.createEmployee("Ali Hassan");
// function overloading
type combine = number | string;

function getAdd(a: string, b: string): string;
function getAdd(a: number, b: number): number;
function getAdd(a: number, b: string): string;
function getAdd(a: string, b: number): string;
function getAdd(a: combine, b: combine): combine {
      if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
      }
      return a + b;

}

console.log(typeof getAdd('ali', 23));

console.log(typeof getAdd('ali', 'hassan'));
console.log(getAdd(25, 23));
console.log(getAdd('ali', 23));

function add(a: string, b: string): string;

function add(a: number, b: number): number;

function add(a: any, b: any): any {
      return a + b;
}

add("Hello ", "Steve");
add(10, 20);

// Genrics for 
// functions
function createPair<S, T>(v1: S, v2: T): [S, T] {
      return [v1, v2];
}
console.log(createPair<string, number>('hello', 42));

// Classes
class NamedValue<T> {
      private _value: T | undefined;

      constructor(private name: string) { }

      public setValue(value: T) {
            this._value = value;
      }

      public getValue(): T | undefined {
            return this._value;
      }

      public toString(): string {
            return `${this.name}: ${this._value}`;
      }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString());

// Typs script utility types
// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types
//Partial
// Partial changes all the properties in an object to be optional.
interface Point {
      x: number;
      y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

// Required changes all the properties in an object to be required.
interface Car {
      make: string;
      model: string;
      mileage?: number;
}

let myCar: Required<Car> = {
      make: 'Ford',
      model: 'Focus',
      mileage: 12000
};
// Record is a shortcut to defining an object type with a specific key type and value type.
const nameAgeMap: Record<string, number> = {
      'Alice': 21,
      'Bob': 25
};
// Omit removes keys from an object type.
interface Person {
      name: string;
      age: number;
      location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
      name: 'Bob'
      // `Omit` has removed age and location from the type and they can't be defined here
};
// Pick removes all but the specified keys from an object type.
interface Person {
      name: string;
      age: number;
      location?: string;
}

const bob: Pick<Person, 'name'> = {
      name: 'Bob'
      // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
// Exclude removes types from a union.
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

// key of
interface Person {
      name: string;
      age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
      console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
      name: "Max",
      age: 27
};
printPersonProperty(person, "name");

