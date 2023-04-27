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

function add(a: string, b: string): string;

function add(a: number, b: number): number;

function add(a: any, b: any): any {
      return a + b;
}

add("Hello ", "Steve");
add(10, 20);

// Genrics
function createPair<S, T>(v1: S, v2: T): [S, T] {
      return [v1, v2];
}
console.log(createPair<string, number>('hello', 42));


