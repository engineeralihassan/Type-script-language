console.log("Hello ali welcome to in the Type script learning word");
alert("File atached");
let btn=document.querySelector('#btn' ) as HTMLElement;
let inp=document.querySelector('#inp') as HTMLInputElement;
function show(sum: number){
      return inp.value;
}
btn.addEventListener('click',()=>{
     console.log(show(+inp.value))
     console.log("This is the type script auto detect changes ");
     console.log("hurray finish i am success full in this ");
});
// command run
// cd TS-Files
// tsc --watch 02-data-types.ts