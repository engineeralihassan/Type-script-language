var _a;
console.log("all about type casting in ts");
console.log("How we change the type of an variable");
var paragraph = document.querySelector('p');
console.log(paragraph === null || paragraph === void 0 ? void 0 : paragraph.textContent);
// let input = <HTMLInputElement>document.querySelector('input');
var input = document.querySelector('input');
input.value = 'Hello ali hassan';
console.log(input === null || input === void 0 ? void 0 : input.value);
// we can tell the type script this is input element
var btn = (_a = document.querySelector('button')) === null || _a === void 0 ? void 0 : _a.innerText;
console.log(btn);
