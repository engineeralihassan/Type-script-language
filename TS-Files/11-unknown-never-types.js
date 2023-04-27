console.log("wellcome to unknown and never types in type script");
// we will see the unknown and never input types
let userInput;
userInput = 5;
userInput = 'Ali Hassan';
console.log(userInput);
// we not now the type of the input we set this any
// we use the unknown data type to initialize the and declaire varible if we could
// not now the type of this data 
let c1;
c1 = 'Amjad';
c1 = 123;
let name1;
name1 = 'ali';
// name1=c; this is error 
console.log(name1);
// we have another type in type script
function error(mesg, code) {
    throw { mesg, code };
}
let r = error('Invalid Code', 500);
console.log(r);
// its mean that the function is return never or nothing
// so thats wht we could not assign
// thei function any variable to ge
// the value
// we could compile the ts file on every time when any short change is happen
// but we get ride of this problem by --watch operator
// we compile the many ts file at onces
