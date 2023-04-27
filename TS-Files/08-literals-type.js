console.log("Wellcome to the literals type in type script");
// we also tell the compiler what type of result we aspet
function sum(num, num1, resultType) {
    if (typeof num === 'number' && typeof num1 === 'number') {
        return num + num;
    }
    else {
        return "Please enter the values in numbers";
    }
}
// here we also tell that which type of result we want from the functions
let val = sum('12', '12', 'as-number');
let val1 = sum(12, 34, 'as-string');
console.log(val, val1);
