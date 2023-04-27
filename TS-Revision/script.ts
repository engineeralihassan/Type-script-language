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






