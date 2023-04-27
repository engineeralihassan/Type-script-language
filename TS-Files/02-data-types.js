// Ts is allow data types which is support in js
// like number = all types of numbner like decimal ecery things are numbers
// string = "Ali","a","Al","He is good boy and person";
//  #Boolen = true false 
// lets apply this is real time
let num1 = 34;
let num2 = 23;
console.log(num1 + num2);
// we also make the functions to accept the strict type parameters
// other wise give the run time error
function sum(num1, num2) {
    console.log("This is combination function", num1, "=", num2);
}
sum(12, 'Ali');
// sum('12',12);  this is run time error 
//  # ts is allow us to define variable of specific types
let str;
str = "Ali Hassan 🤙";
// str=234; this is wrong
let isretired = true;
isretired = false;
// isretired="wetr" this is wrong run time error
