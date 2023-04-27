console.log("Wellcome the Return Type of ther functions in type script");
// we also define the return
//  type of the function
// we give the required type to functio 
function sum(num: number): number {

      // return num.toString() + num; this linegive you error
      return num + num
}
function addstr(str1, str2): number {
      return str1 + str2;
}
let val = sum(12);
console.log(typeof val);
console.log(addstr('12', 12));
// the by defualt the void is return the undefined dta type of return

let n;
n = 23;
console.log(23);



