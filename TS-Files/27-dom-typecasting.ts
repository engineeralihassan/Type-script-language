console.log("all about type casting in ts");
console.log("How we change the type of an variable");
let paragraph = document.querySelector('p');
console.log(paragraph?.textContent);
// let input = <HTMLInputElement>document.querySelector('input');
let input = document.querySelector('input') as HTMLInputElement;

input.value = 'Hello ali hassan';

console.log(input?.value);
// we can tell the type script this is input element
let btn = document.querySelector('button')?.innerText;
console.log(btn);


