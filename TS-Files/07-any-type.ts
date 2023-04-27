console.log("Wellcome all about Any Data type in TS")
//  if we could not now the data type of the data we could assign it
// any data type is this case we avoisd from error

let arr:any=[];
arr.push('Ali Hassan');
arr.push(['Ali Hassan',230]);
// we can push any kind of data in this any kind variable
let a:any='ali';
a=234;

// # All about The union data types 
function sum(num:number | string,num1:number | string){
      if(typeof num === 'number' && typeof num1 === 'number'){
            return num+num1;
      }
      else{
            return 'plase enter 2 valis numbers';
      }
   
}
let v=sum(12.34,12);
console.log(v);

console.log(sum('hanzla',234));




