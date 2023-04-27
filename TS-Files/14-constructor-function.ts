console.log("Wellcome to constructors functions  files ");
// # This keyword is reffer to this class
class Department {
      name5555: string;
      age: number
      constructor(name: string, age: number) {
            this.name5555 = name;
            this.age = age

      }
      // we declare method in ts class like this
      // description() {
      //       console.log("the name is ", this.name5555);
      // }
      usethis(this: Department) {
            console.log('Hello Mr ' + this.name5555 + 'and your age is ', this.age)
      }

}
let obj55 = new Department('Anjum Tajran', 23);
console.log(obj55);
let c = obj55.name5555;
console.log(c);

// make the use of this keyword specialy
let departmentCopy: any = { name5555: 'Aslam khial', desc: obj55.usethis };
console.log(departmentCopy.desc());
console.log("This is the last chance to ge the data");

// if we could not ahve the property in the copt object then we  use the bind method 

let copy1 = { desc1: obj55.usethis };
console.log(copy1.desc1.bind(obj55)());









