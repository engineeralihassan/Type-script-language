// its all about the function overloading
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





