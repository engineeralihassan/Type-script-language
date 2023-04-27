console.log("we learn all about arrays types in TS");
let hobbies = ['playing', 'guardning', 'Coding', 'Hackathones'];
console.log(hobbies);
// we can also type in arrays
let nameArr = ["Ali Hassan", "Husnain Rubani", "Sundarta"];
console.log(nameArr);
// nameArr='Ali Hassan'  this is an array nort assing string
nameArr = ['Ahmad siraj'];
console.log(nameArr);
// we could also assign the mixed array byb any data type
let arr2 = ['Ali', 12, "Subaydar", false];
console.log(arr2);
for (let ele of nameArr) {
    console.log(ele);
}
for (let ele of hobbies) {
    console.log(ele);
}
let arr3 = [...hobbies, "Fullstack"];
console.log(arr3);
