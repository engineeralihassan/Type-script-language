console.log("Hello ali welcome to in the Type script learning word");
alert("File atached");
var btn = document.querySelector('#btn');
var inp = document.querySelector('#inp');
function show(sum) {
    return inp.value;
}
btn.addEventListener('click', function () {
    console.log(show(+inp.value));
    console.log("This is the type script auto detect changes ");
    console.log("hurray finish i am success full in this ");
});
