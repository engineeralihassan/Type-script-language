console.log("wellcome to asssign a function as a variable type in type script");
function add(number1, number2) {
    return number1 - number2;
}
function printResult(value) {
    console.log("Result is", value);
}
let combinevalue;
combinevalue = add(12, 45);
console.log(combinevalue);
// we can give the variable type of functions 
let c;
// c=printResult(12); we could not assign void
c = add;
console.log(c(12, 23)); //we do this this is write syntax in ts
// we also tell the function type how many anguamnet and wich type of argument recieve and also retuen type of thei 
let d;
d = add;
console.log(d('12', 23));
